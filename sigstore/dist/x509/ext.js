"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x509SCTExtension = exports.x509SubjectKeyIDExtension = exports.x509AuthorityKeyIDExtension = exports.x509SubjectAlternativeNameExtension = exports.x509KeyUsageExtension = exports.x509BasicConstraintsExtension = exports.x509Extension = void 0;
/*
Copyright 2023 The Sigstore Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const stream_1 = require("../util/stream");
const sct_1 = require("./sct");
// https://www.rfc-editor.org/rfc/rfc5280#section-4.1
class x509Extension {
    constructor(asn1) {
        this.root = asn1;
    }
    get oid() {
        return this.root.subs[0].toOID();
    }
    get critical() {
        // The critical field is optional and will be the second element of the
        // extension sequence if present. Default to false if not present.
        return this.root.subs.length === 3 ? this.root.subs[1].toBoolean() : false;
    }
    get value() {
        return this.extnValueObj.value;
    }
    get extnValueObj() {
        // The extnValue field will be the last element of the extension sequence
        return this.root.subs[this.root.subs.length - 1];
    }
}
exports.x509Extension = x509Extension;
// https://www.rfc-editor.org/rfc/rfc5280#section-4.2.1.9
class x509BasicConstraintsExtension extends x509Extension {
    get isCA() {
        return this.sequence.subs[0].toBoolean();
    }
    get pathLenConstraint() {
        return this.sequence.subs.length > 1
            ? this.sequence.subs[1].toInteger()
            : undefined;
    }
    // The extnValue field contains a single sequence wrapping the isCA and
    // pathLenConstraint.
    get sequence() {
        return this.extnValueObj.subs[0];
    }
}
exports.x509BasicConstraintsExtension = x509BasicConstraintsExtension;
// https://www.rfc-editor.org/rfc/rfc5280#section-4.2.1.3
class x509KeyUsageExtension extends x509Extension {
    get digitalSignature() {
        return this.bitString[0] === 1;
    }
    get keyCertSign() {
        return this.bitString[5] === 1;
    }
    get crlSign() {
        return this.bitString[6] === 1;
    }
    // The extnValue field contains a single bit string which is a bit mask
    // indicating which key usages are enabled.
    get bitString() {
        return this.extnValueObj.subs[0].toBitString();
    }
}
exports.x509KeyUsageExtension = x509KeyUsageExtension;
// https://www.rfc-editor.org/rfc/rfc5280#section-4.2.1.6
class x509SubjectAlternativeNameExtension extends x509Extension {
    get rfc822Name() {
        return this.findGeneralName(0x01)?.value.toString('ascii');
    }
    get uri() {
        return this.findGeneralName(0x06)?.value.toString('ascii');
    }
    // Retrieve the value of an otherName with the given OID.
    otherName(oid) {
        const otherName = this.findGeneralName(0x00);
        if (otherName === undefined) {
            return undefined;
        }
        // The otherName is a sequence containing an OID and a value.
        // Need to check that the OID matches the one we're looking for.
        const otherNameOID = otherName.subs[0].toOID();
        if (otherNameOID !== oid) {
            return undefined;
        }
        // The otherNameValue is a sequence containing the actual value.
        const otherNameValue = otherName.subs[1];
        return otherNameValue.subs[0].value.toString('ascii');
    }
    findGeneralName(tag) {
        return this.generalNames.find((gn) => gn.tag.isContextSpecific(tag));
    }
    // The extnValue field contains a sequence of GeneralNames.
    get generalNames() {
        return this.extnValueObj.subs[0].subs;
    }
}
exports.x509SubjectAlternativeNameExtension = x509SubjectAlternativeNameExtension;
// https://www.rfc-editor.org/rfc/rfc5280#section-4.2.1.1
class x509AuthorityKeyIDExtension extends x509Extension {
    get keyIdentifier() {
        return this.findSequenceMember(0x00)?.value;
    }
    findSequenceMember(tag) {
        return this.sequence.subs.find((el) => el.tag.isContextSpecific(tag));
    }
    // The extnValue field contains a single sequence wrapping the keyIdentifier
    get sequence() {
        return this.extnValueObj.subs[0];
    }
}
exports.x509AuthorityKeyIDExtension = x509AuthorityKeyIDExtension;
// https://www.rfc-editor.org/rfc/rfc5280#section-4.2.1.2
class x509SubjectKeyIDExtension extends x509Extension {
    get keyIdentifier() {
        return this.extnValueObj.subs[0].value;
    }
}
exports.x509SubjectKeyIDExtension = x509SubjectKeyIDExtension;
// https://www.rfc-editor.org/rfc/rfc6962#section-3.3
class x509SCTExtension extends x509Extension {
    constructor(asn1) {
        super(asn1);
    }
    get signedCertificateTimestamps() {
        const buf = this.extnValueObj.subs[0].value;
        const stream = new stream_1.ByteStream(buf);
        // The overall list length is encoded in the first two bytes -- note this
        // is the length of the list in bytes, NOT the number of SCTs in the list
        const end = stream.getUint16() + 2;
        const sctList = [];
        while (stream.position < end) {
            // Read the length of the next SCT
            const sctLength = stream.getUint16();
            // Slice out the bytes for the next SCT and parse it
            const sct = stream.getBlock(sctLength);
            sctList.push(sct_1.SignedCertificateTimestamp.parse(sct));
        }
        if (stream.position !== end) {
            throw new Error('SCT list length does not match actual length');
        }
        return sctList;
    }
}
exports.x509SCTExtension = x509SCTExtension;
