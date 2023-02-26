"use strict";
// THIS FILE IS AUTOMATICALLY GENERATED. TO UPDATE THIS FILE YOU NEED TO CHANGE THE
// CORRESPONDING JSON SCHEMA FILE, THEN RUN devkit-admin build (or bazel build ...).
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputHashing = exports.InlineStyleLanguage = exports.I18NTranslation = exports.CrossOrigin = exports.Type = void 0;
/**
 * The type of budget.
 */
var Type;
(function (Type) {
    Type["All"] = "all";
    Type["AllScript"] = "allScript";
    Type["Any"] = "any";
    Type["AnyComponentStyle"] = "anyComponentStyle";
    Type["AnyScript"] = "anyScript";
    Type["Bundle"] = "bundle";
    Type["Initial"] = "initial";
})(Type = exports.Type || (exports.Type = {}));
/**
 * Define the crossorigin attribute setting of elements that provide CORS support.
 */
var CrossOrigin;
(function (CrossOrigin) {
    CrossOrigin["Anonymous"] = "anonymous";
    CrossOrigin["None"] = "none";
    CrossOrigin["UseCredentials"] = "use-credentials";
})(CrossOrigin = exports.CrossOrigin || (exports.CrossOrigin = {}));
/**
 * How to handle duplicate translations for i18n.
 *
 * How to handle missing translations for i18n.
 */
var I18NTranslation;
(function (I18NTranslation) {
    I18NTranslation["Error"] = "error";
    I18NTranslation["Ignore"] = "ignore";
    I18NTranslation["Warning"] = "warning";
})(I18NTranslation = exports.I18NTranslation || (exports.I18NTranslation = {}));
/**
 * The stylesheet language to use for the application's inline component styles.
 */
var InlineStyleLanguage;
(function (InlineStyleLanguage) {
    InlineStyleLanguage["Css"] = "css";
    InlineStyleLanguage["Less"] = "less";
    InlineStyleLanguage["Sass"] = "sass";
    InlineStyleLanguage["Scss"] = "scss";
})(InlineStyleLanguage = exports.InlineStyleLanguage || (exports.InlineStyleLanguage = {}));
/**
 * Define the output filename cache-busting hashing mode.
 */
var OutputHashing;
(function (OutputHashing) {
    OutputHashing["All"] = "all";
    OutputHashing["Bundles"] = "bundles";
    OutputHashing["Media"] = "media";
    OutputHashing["None"] = "none";
})(OutputHashing = exports.OutputHashing || (exports.OutputHashing = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhcl9kZXZraXQvYnVpbGRfYW5ndWxhci9zcmMvYnVpbGRlcnMvYnJvd3Nlci1lc2J1aWxkL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUZBQW1GO0FBQ25GLG9GQUFvRjs7O0FBeVBwRjs7R0FFRztBQUNILElBQVksSUFRWDtBQVJELFdBQVksSUFBSTtJQUNaLG1CQUFXLENBQUE7SUFDWCwrQkFBdUIsQ0FBQTtJQUN2QixtQkFBVyxDQUFBO0lBQ1gsK0NBQXVDLENBQUE7SUFDdkMsK0JBQXVCLENBQUE7SUFDdkIseUJBQWlCLENBQUE7SUFDakIsMkJBQW1CLENBQUE7QUFDdkIsQ0FBQyxFQVJXLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQVFmO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsc0NBQXVCLENBQUE7SUFDdkIsNEJBQWEsQ0FBQTtJQUNiLGlEQUFrQyxDQUFBO0FBQ3RDLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQU9EOzs7O0dBSUc7QUFDSCxJQUFZLGVBSVg7QUFKRCxXQUFZLGVBQWU7SUFDdkIsa0NBQWUsQ0FBQTtJQUNmLG9DQUFpQixDQUFBO0lBQ2pCLHNDQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFKVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUkxQjtBQW9CRDs7R0FFRztBQUNILElBQVksbUJBS1g7QUFMRCxXQUFZLG1CQUFtQjtJQUMzQixrQ0FBVyxDQUFBO0lBQ1gsb0NBQWEsQ0FBQTtJQUNiLG9DQUFhLENBQUE7SUFDYixvQ0FBYSxDQUFBO0FBQ2pCLENBQUMsRUFMVyxtQkFBbUIsR0FBbkIsMkJBQW1CLEtBQW5CLDJCQUFtQixRQUs5QjtBQStERDs7R0FFRztBQUNILElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQiw0QkFBVyxDQUFBO0lBQ1gsb0NBQW1CLENBQUE7SUFDbkIsZ0NBQWUsQ0FBQTtJQUNmLDhCQUFhLENBQUE7QUFDakIsQ0FBQyxFQUxXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBS3hCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBUSElTIEZJTEUgSVMgQVVUT01BVElDQUxMWSBHRU5FUkFURUQuIFRPIFVQREFURSBUSElTIEZJTEUgWU9VIE5FRUQgVE8gQ0hBTkdFIFRIRVxuLy8gQ09SUkVTUE9ORElORyBKU09OIFNDSEVNQSBGSUxFLCBUSEVOIFJVTiBkZXZraXQtYWRtaW4gYnVpbGQgKG9yIGJhemVsIGJ1aWxkIC4uLikuXG5cbi8qKlxuICogQnJvd3NlciB0YXJnZXQgb3B0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVtYSB7XG4gICAgLyoqXG4gICAgICogQSBsaXN0IG9mIENvbW1vbkpTIHBhY2thZ2VzIHRoYXQgYXJlIGFsbG93ZWQgdG8gYmUgdXNlZCB3aXRob3V0IGEgYnVpbGQgdGltZSB3YXJuaW5nLlxuICAgICAqL1xuICAgIGFsbG93ZWRDb21tb25Kc0RlcGVuZGVuY2llcz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEJ1aWxkIHVzaW5nIEFoZWFkIG9mIFRpbWUgY29tcGlsYXRpb24uXG4gICAgICovXG4gICAgYW90PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHN0YXRpYyBhcHBsaWNhdGlvbiBhc3NldHMuXG4gICAgICovXG4gICAgYXNzZXRzPzogQXNzZXRQYXR0ZXJuW107XG4gICAgLyoqXG4gICAgICogQmFzZSB1cmwgZm9yIHRoZSBhcHBsaWNhdGlvbiBiZWluZyBidWlsdC5cbiAgICAgKi9cbiAgICBiYXNlSHJlZj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBCdWRnZXQgdGhyZXNob2xkcyB0byBlbnN1cmUgcGFydHMgb2YgeW91ciBhcHBsaWNhdGlvbiBzdGF5IHdpdGhpbiBib3VuZGFyaWVzIHdoaWNoIHlvdVxuICAgICAqIHNldC5cbiAgICAgKi9cbiAgICBidWRnZXRzPzogQnVkZ2V0W107XG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBhZHZhbmNlZCBidWlsZCBvcHRpbWl6YXRpb25zIHdoZW4gdXNpbmcgdGhlICdhb3QnIG9wdGlvbi5cbiAgICAgKi9cbiAgICBidWlsZE9wdGltaXplcj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSBzZXBlcmF0ZSBidW5kbGUgY29udGFpbmluZyBjb2RlIHVzZWQgYWNyb3NzIG11bHRpcGxlIGJ1bmRsZXMuXG4gICAgICovXG4gICAgY29tbW9uQ2h1bms/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIERlZmluZSB0aGUgY3Jvc3NvcmlnaW4gYXR0cmlidXRlIHNldHRpbmcgb2YgZWxlbWVudHMgdGhhdCBwcm92aWRlIENPUlMgc3VwcG9ydC5cbiAgICAgKi9cbiAgICBjcm9zc09yaWdpbj86IENyb3NzT3JpZ2luO1xuICAgIC8qKlxuICAgICAqIERlbGV0ZSB0aGUgb3V0cHV0IHBhdGggYmVmb3JlIGJ1aWxkaW5nLlxuICAgICAqL1xuICAgIGRlbGV0ZU91dHB1dFBhdGg/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFVSTCB3aGVyZSBmaWxlcyB3aWxsIGJlIGRlcGxveWVkLlxuICAgICAqIEBkZXByZWNhdGVkIFVzZSBcImJhc2VIcmVmXCIgb3B0aW9uLCBcIkFQUF9CQVNFX0hSRUZcIiBESSB0b2tlbiBvciBhIGNvbWJpbmF0aW9uIG9mIGJvdGhcbiAgICAgKiBpbnN0ZWFkLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBsb3ltZW50I3RoZS1kZXBsb3ktdXJsLlxuICAgICAqL1xuICAgIGRlcGxveVVybD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBFeGNsdWRlIHRoZSBsaXN0ZWQgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzIGZyb20gYmVpbmcgYnVuZGxlZCBpbnRvIHRoZSBidW5kbGUuIEluc3RlYWQsIHRoZVxuICAgICAqIGNyZWF0ZWQgYnVuZGxlIHJlbGllcyBvbiB0aGVzZSBkZXBlbmRlbmNpZXMgdG8gYmUgYXZhaWxhYmxlIGR1cmluZyBydW50aW1lLlxuICAgICAqL1xuICAgIGV4dGVybmFsRGVwZW5kZW5jaWVzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBhbGwgbGljZW5zZXMgaW4gYSBzZXBhcmF0ZSBmaWxlLlxuICAgICAqL1xuICAgIGV4dHJhY3RMaWNlbnNlcz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBjb21waWxhdGlvbiBzb3VyY2UgZmlsZXMgd2l0aCBvdGhlciBjb21waWxhdGlvbiBzb3VyY2UgZmlsZXMgaW4gdGhlIGJ1aWxkLlxuICAgICAqL1xuICAgIGZpbGVSZXBsYWNlbWVudHM/OiBGaWxlUmVwbGFjZW1lbnRbXTtcbiAgICAvKipcbiAgICAgKiBIb3cgdG8gaGFuZGxlIGR1cGxpY2F0ZSB0cmFuc2xhdGlvbnMgZm9yIGkxOG4uXG4gICAgICovXG4gICAgaTE4bkR1cGxpY2F0ZVRyYW5zbGF0aW9uPzogSTE4TlRyYW5zbGF0aW9uO1xuICAgIC8qKlxuICAgICAqIEhvdyB0byBoYW5kbGUgbWlzc2luZyB0cmFuc2xhdGlvbnMgZm9yIGkxOG4uXG4gICAgICovXG4gICAgaTE4bk1pc3NpbmdUcmFuc2xhdGlvbj86IEkxOE5UcmFuc2xhdGlvbjtcbiAgICAvKipcbiAgICAgKiBDb25maWd1cmVzIHRoZSBnZW5lcmF0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbidzIEhUTUwgaW5kZXguXG4gICAgICovXG4gICAgaW5kZXg6IEluZGV4VW5pb247XG4gICAgLyoqXG4gICAgICogVGhlIHN0eWxlc2hlZXQgbGFuZ3VhZ2UgdG8gdXNlIGZvciB0aGUgYXBwbGljYXRpb24ncyBpbmxpbmUgY29tcG9uZW50IHN0eWxlcy5cbiAgICAgKi9cbiAgICBpbmxpbmVTdHlsZUxhbmd1YWdlPzogSW5saW5lU3R5bGVMYW5ndWFnZTtcbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGUgdGhlIGJ1bmRsZXMgaW4gb25lIG9yIG1vcmUgbG9jYWxlcy5cbiAgICAgKi9cbiAgICBsb2NhbGl6ZT86IExvY2FsaXplO1xuICAgIC8qKlxuICAgICAqIFRoZSBmdWxsIHBhdGggZm9yIHRoZSBtYWluIGVudHJ5IHBvaW50IHRvIHRoZSBhcHAsIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHdvcmtzcGFjZS5cbiAgICAgKi9cbiAgICBtYWluOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVXNlIGZpbGUgbmFtZSBmb3IgbGF6eSBsb2FkZWQgY2h1bmtzLlxuICAgICAqL1xuICAgIG5hbWVkQ2h1bmtzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIG5nc3ctY29uZmlnLmpzb24uXG4gICAgICovXG4gICAgbmdzd0NvbmZpZ1BhdGg/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBvcHRpbWl6YXRpb24gb2YgdGhlIGJ1aWxkIG91dHB1dC4gSW5jbHVkaW5nIG1pbmlmaWNhdGlvbiBvZiBzY3JpcHRzIGFuZCBzdHlsZXMsXG4gICAgICogdHJlZS1zaGFraW5nLCBkZWFkLWNvZGUgZWxpbWluYXRpb24sIGlubGluaW5nIG9mIGNyaXRpY2FsIENTUyBhbmQgZm9udHMgaW5saW5pbmcuIEZvclxuICAgICAqIG1vcmUgaW5mb3JtYXRpb24sIHNlZVxuICAgICAqIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS93b3Jrc3BhY2UtY29uZmlnI29wdGltaXphdGlvbi1jb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIG9wdGltaXphdGlvbj86IE9wdGltaXphdGlvblVuaW9uO1xuICAgIC8qKlxuICAgICAqIERlZmluZSB0aGUgb3V0cHV0IGZpbGVuYW1lIGNhY2hlLWJ1c3RpbmcgaGFzaGluZyBtb2RlLlxuICAgICAqL1xuICAgIG91dHB1dEhhc2hpbmc/OiBPdXRwdXRIYXNoaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBmdWxsIHBhdGggZm9yIHRoZSBuZXcgb3V0cHV0IGRpcmVjdG9yeSwgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgd29ya3NwYWNlLlxuICAgICAqIEJ5IGRlZmF1bHQsIHdyaXRlcyBvdXRwdXQgdG8gYSBmb2xkZXIgbmFtZWQgZGlzdC8gaW4gdGhlIGN1cnJlbnQgcHJvamVjdC5cbiAgICAgKi9cbiAgICBvdXRwdXRQYXRoOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRW5hYmxlIGFuZCBkZWZpbmUgdGhlIGZpbGUgd2F0Y2hpbmcgcG9sbCB0aW1lIHBlcmlvZCBpbiBtaWxsaXNlY29uZHMuXG4gICAgICovXG4gICAgcG9sbD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBQb2x5ZmlsbHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGJ1aWxkLlxuICAgICAqL1xuICAgIHBvbHlmaWxscz86IFBvbHlmaWxscztcbiAgICAvKipcbiAgICAgKiBEbyBub3QgdXNlIHRoZSByZWFsIHBhdGggd2hlbiByZXNvbHZpbmcgbW9kdWxlcy4gSWYgdW5zZXQgdGhlbiB3aWxsIGRlZmF1bHQgdG8gYHRydWVgIGlmXG4gICAgICogTm9kZUpTIG9wdGlvbiAtLXByZXNlcnZlLXN5bWxpbmtzIGlzIHNldC5cbiAgICAgKi9cbiAgICBwcmVzZXJ2ZVN5bWxpbmtzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBMb2cgcHJvZ3Jlc3MgdG8gdGhlIGNvbnNvbGUgd2hpbGUgYnVpbGRpbmcuXG4gICAgICovXG4gICAgcHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBwYXRoIHdoZXJlIHN0eWxlIHJlc291cmNlcyB3aWxsIGJlIHBsYWNlZCwgcmVsYXRpdmUgdG8gb3V0cHV0UGF0aC5cbiAgICAgKi9cbiAgICByZXNvdXJjZXNPdXRwdXRQYXRoPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEdsb2JhbCBzY3JpcHRzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBidWlsZC5cbiAgICAgKi9cbiAgICBzY3JpcHRzPzogU2NyaXB0RWxlbWVudFtdO1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIHNlcnZpY2Ugd29ya2VyIGNvbmZpZyBmb3IgcHJvZHVjdGlvbiBidWlsZHMuXG4gICAgICovXG4gICAgc2VydmljZVdvcmtlcj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3V0cHV0IHNvdXJjZSBtYXBzIGZvciBzY3JpcHRzIGFuZCBzdHlsZXMuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbiAgICAgKiBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvd29ya3NwYWNlLWNvbmZpZyNzb3VyY2UtbWFwLWNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgc291cmNlTWFwPzogU291cmNlTWFwVW5pb247XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgJ3N0YXRzLmpzb24nIGZpbGUgd2hpY2ggY2FuIGJlIGFuYWx5emVkIHVzaW5nIHRvb2xzIHN1Y2ggYXNcbiAgICAgKiAnd2VicGFjay1idW5kbGUtYW5hbHl6ZXInLlxuICAgICAqL1xuICAgIHN0YXRzSnNvbj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBwYXNzIHRvIHN0eWxlIHByZXByb2Nlc3NvcnMuXG4gICAgICovXG4gICAgc3R5bGVQcmVwcm9jZXNzb3JPcHRpb25zPzogU3R5bGVQcmVwcm9jZXNzb3JPcHRpb25zO1xuICAgIC8qKlxuICAgICAqIEdsb2JhbCBzdHlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGJ1aWxkLlxuICAgICAqL1xuICAgIHN0eWxlcz86IFN0eWxlRWxlbWVudFtdO1xuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgdGhlIHVzZSBvZiBzdWJyZXNvdXJjZSBpbnRlZ3JpdHkgdmFsaWRhdGlvbi5cbiAgICAgKi9cbiAgICBzdWJyZXNvdXJjZUludGVncml0eT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGZ1bGwgcGF0aCBmb3IgdGhlIFR5cGVTY3JpcHQgY29uZmlndXJhdGlvbiBmaWxlLCByZWxhdGl2ZSB0byB0aGUgY3VycmVudCB3b3Jrc3BhY2UuXG4gICAgICovXG4gICAgdHNDb25maWc6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhIHNlcGVyYXRlIGJ1bmRsZSBjb250YWluaW5nIG9ubHkgdmVuZG9yIGxpYnJhcmllcy4gVGhpcyBvcHRpb24gc2hvdWxkIG9ubHkgYmVcbiAgICAgKiB1c2VkIGZvciBkZXZlbG9wbWVudCB0byByZWR1Y2UgdGhlIGluY3JlbWVudGFsIGNvbXBpbGF0aW9uIHRpbWUuXG4gICAgICovXG4gICAgdmVuZG9yQ2h1bms/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEFkZHMgbW9yZSBkZXRhaWxzIHRvIG91dHB1dCBsb2dnaW5nLlxuICAgICAqL1xuICAgIHZlcmJvc2U/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJ1biBidWlsZCB3aGVuIGZpbGVzIGNoYW5nZS5cbiAgICAgKi9cbiAgICB3YXRjaD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVHlwZVNjcmlwdCBjb25maWd1cmF0aW9uIGZvciBXZWIgV29ya2VyIG1vZHVsZXMuXG4gICAgICovXG4gICAgd2ViV29ya2VyVHNDb25maWc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEFzc2V0UGF0dGVybiA9IEFzc2V0UGF0dGVybkNsYXNzIHwgc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0UGF0dGVybkNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBbGxvdyBnbG9iIHBhdHRlcm5zIHRvIGZvbGxvdyBzeW1saW5rIGRpcmVjdG9yaWVzLiBUaGlzIGFsbG93cyBzdWJkaXJlY3RvcmllcyBvZiB0aGVcbiAgICAgKiBzeW1saW5rIHRvIGJlIHNlYXJjaGVkLlxuICAgICAqL1xuICAgIGZvbGxvd1N5bWxpbmtzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgcGF0dGVybiB0byBtYXRjaC5cbiAgICAgKi9cbiAgICBnbG9iOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgZ2xvYnMgdG8gaWdub3JlLlxuICAgICAqL1xuICAgIGlnbm9yZT86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBkaXJlY3RvcnkgcGF0aCBpbiB3aGljaCB0byBhcHBseSAnZ2xvYicuIERlZmF1bHRzIHRvIHRoZSBwcm9qZWN0IHJvb3QuXG4gICAgICovXG4gICAgaW5wdXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBYnNvbHV0ZSBwYXRoIHdpdGhpbiB0aGUgb3V0cHV0LlxuICAgICAqL1xuICAgIG91dHB1dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1ZGdldCB7XG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VsaW5lIHNpemUgZm9yIGNvbXBhcmlzb24uXG4gICAgICovXG4gICAgYmFzZWxpbmU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRocmVzaG9sZCBmb3IgZXJyb3IgcmVsYXRpdmUgdG8gdGhlIGJhc2VsaW5lIChtaW4gJiBtYXgpLlxuICAgICAqL1xuICAgIGVycm9yPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIHRocmVzaG9sZCBmb3IgZXJyb3IgcmVsYXRpdmUgdG8gdGhlIGJhc2VsaW5lLlxuICAgICAqL1xuICAgIG1heGltdW1FcnJvcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSB0aHJlc2hvbGQgZm9yIHdhcm5pbmcgcmVsYXRpdmUgdG8gdGhlIGJhc2VsaW5lLlxuICAgICAqL1xuICAgIG1heGltdW1XYXJuaW5nPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHRocmVzaG9sZCBmb3IgZXJyb3IgcmVsYXRpdmUgdG8gdGhlIGJhc2VsaW5lLlxuICAgICAqL1xuICAgIG1pbmltdW1FcnJvcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSB0aHJlc2hvbGQgZm9yIHdhcm5pbmcgcmVsYXRpdmUgdG8gdGhlIGJhc2VsaW5lLlxuICAgICAqL1xuICAgIG1pbmltdW1XYXJuaW5nPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBidW5kbGUuXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBidWRnZXQuXG4gICAgICovXG4gICAgdHlwZTogVHlwZTtcbiAgICAvKipcbiAgICAgKiBUaGUgdGhyZXNob2xkIGZvciB3YXJuaW5nIHJlbGF0aXZlIHRvIHRoZSBiYXNlbGluZSAobWluICYgbWF4KS5cbiAgICAgKi9cbiAgICB3YXJuaW5nPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFRoZSB0eXBlIG9mIGJ1ZGdldC5cbiAqL1xuZXhwb3J0IGVudW0gVHlwZSB7XG4gICAgQWxsID0gXCJhbGxcIixcbiAgICBBbGxTY3JpcHQgPSBcImFsbFNjcmlwdFwiLFxuICAgIEFueSA9IFwiYW55XCIsXG4gICAgQW55Q29tcG9uZW50U3R5bGUgPSBcImFueUNvbXBvbmVudFN0eWxlXCIsXG4gICAgQW55U2NyaXB0ID0gXCJhbnlTY3JpcHRcIixcbiAgICBCdW5kbGUgPSBcImJ1bmRsZVwiLFxuICAgIEluaXRpYWwgPSBcImluaXRpYWxcIixcbn1cblxuLyoqXG4gKiBEZWZpbmUgdGhlIGNyb3Nzb3JpZ2luIGF0dHJpYnV0ZSBzZXR0aW5nIG9mIGVsZW1lbnRzIHRoYXQgcHJvdmlkZSBDT1JTIHN1cHBvcnQuXG4gKi9cbmV4cG9ydCBlbnVtIENyb3NzT3JpZ2luIHtcbiAgICBBbm9ueW1vdXMgPSBcImFub255bW91c1wiLFxuICAgIE5vbmUgPSBcIm5vbmVcIixcbiAgICBVc2VDcmVkZW50aWFscyA9IFwidXNlLWNyZWRlbnRpYWxzXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVJlcGxhY2VtZW50IHtcbiAgICByZXBsYWNlOiBzdHJpbmc7XG4gICAgd2l0aDogICAgc3RyaW5nO1xufVxuXG4vKipcbiAqIEhvdyB0byBoYW5kbGUgZHVwbGljYXRlIHRyYW5zbGF0aW9ucyBmb3IgaTE4bi5cbiAqXG4gKiBIb3cgdG8gaGFuZGxlIG1pc3NpbmcgdHJhbnNsYXRpb25zIGZvciBpMThuLlxuICovXG5leHBvcnQgZW51bSBJMThOVHJhbnNsYXRpb24ge1xuICAgIEVycm9yID0gXCJlcnJvclwiLFxuICAgIElnbm9yZSA9IFwiaWdub3JlXCIsXG4gICAgV2FybmluZyA9IFwid2FybmluZ1wiLFxufVxuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIGdlbmVyYXRpb24gb2YgdGhlIGFwcGxpY2F0aW9uJ3MgSFRNTCBpbmRleC5cbiAqL1xuZXhwb3J0IHR5cGUgSW5kZXhVbmlvbiA9IEluZGV4T2JqZWN0IHwgc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluZGV4T2JqZWN0IHtcbiAgICAvKipcbiAgICAgKiBUaGUgcGF0aCBvZiBhIGZpbGUgdG8gdXNlIGZvciB0aGUgYXBwbGljYXRpb24ncyBnZW5lcmF0ZWQgSFRNTCBpbmRleC5cbiAgICAgKi9cbiAgICBpbnB1dDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBvdXRwdXQgcGF0aCBvZiB0aGUgYXBwbGljYXRpb24ncyBnZW5lcmF0ZWQgSFRNTCBpbmRleCBmaWxlLiBUaGUgZnVsbCBwcm92aWRlZCBwYXRoXG4gICAgICogd2lsbCBiZSB1c2VkIGFuZCB3aWxsIGJlIGNvbnNpZGVyZWQgcmVsYXRpdmUgdG8gdGhlIGFwcGxpY2F0aW9uJ3MgY29uZmlndXJlZCBvdXRwdXQgcGF0aC5cbiAgICAgKi9cbiAgICBvdXRwdXQ/OiBzdHJpbmc7XG4gICAgW3Byb3BlcnR5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICogVGhlIHN0eWxlc2hlZXQgbGFuZ3VhZ2UgdG8gdXNlIGZvciB0aGUgYXBwbGljYXRpb24ncyBpbmxpbmUgY29tcG9uZW50IHN0eWxlcy5cbiAqL1xuZXhwb3J0IGVudW0gSW5saW5lU3R5bGVMYW5ndWFnZSB7XG4gICAgQ3NzID0gXCJjc3NcIixcbiAgICBMZXNzID0gXCJsZXNzXCIsXG4gICAgU2FzcyA9IFwic2Fzc1wiLFxuICAgIFNjc3MgPSBcInNjc3NcIixcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgdGhlIGJ1bmRsZXMgaW4gb25lIG9yIG1vcmUgbG9jYWxlcy5cbiAqL1xuZXhwb3J0IHR5cGUgTG9jYWxpemUgPSBzdHJpbmdbXSB8IGJvb2xlYW47XG5cbi8qKlxuICogRW5hYmxlcyBvcHRpbWl6YXRpb24gb2YgdGhlIGJ1aWxkIG91dHB1dC4gSW5jbHVkaW5nIG1pbmlmaWNhdGlvbiBvZiBzY3JpcHRzIGFuZCBzdHlsZXMsXG4gKiB0cmVlLXNoYWtpbmcsIGRlYWQtY29kZSBlbGltaW5hdGlvbiwgaW5saW5pbmcgb2YgY3JpdGljYWwgQ1NTIGFuZCBmb250cyBpbmxpbmluZy4gRm9yXG4gKiBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbiAqIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS93b3Jrc3BhY2UtY29uZmlnI29wdGltaXphdGlvbi1jb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgdHlwZSBPcHRpbWl6YXRpb25VbmlvbiA9IGJvb2xlYW4gfCBPcHRpbWl6YXRpb25DbGFzcztcblxuZXhwb3J0IGludGVyZmFjZSBPcHRpbWl6YXRpb25DbGFzcyB7XG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBvcHRpbWl6YXRpb24gZm9yIGZvbnRzLiBUaGlzIG9wdGlvbiByZXF1aXJlcyBpbnRlcm5ldCBhY2Nlc3MuIGBIVFRQU19QUk9YWWBcbiAgICAgKiBlbnZpcm9ubWVudCB2YXJpYWJsZSBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IGEgcHJveHkgc2VydmVyLlxuICAgICAqL1xuICAgIGZvbnRzPzogRm9udHNVbmlvbjtcbiAgICAvKipcbiAgICAgKiBFbmFibGVzIG9wdGltaXphdGlvbiBvZiB0aGUgc2NyaXB0cyBvdXRwdXQuXG4gICAgICovXG4gICAgc2NyaXB0cz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBvcHRpbWl6YXRpb24gb2YgdGhlIHN0eWxlcyBvdXRwdXQuXG4gICAgICovXG4gICAgc3R5bGVzPzogU3R5bGVzVW5pb247XG59XG5cbi8qKlxuICogRW5hYmxlcyBvcHRpbWl6YXRpb24gZm9yIGZvbnRzLiBUaGlzIG9wdGlvbiByZXF1aXJlcyBpbnRlcm5ldCBhY2Nlc3MuIGBIVFRQU19QUk9YWWBcbiAqIGVudmlyb25tZW50IHZhcmlhYmxlIGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgYSBwcm94eSBzZXJ2ZXIuXG4gKi9cbmV4cG9ydCB0eXBlIEZvbnRzVW5pb24gPSBib29sZWFuIHwgRm9udHNDbGFzcztcblxuZXhwb3J0IGludGVyZmFjZSBGb250c0NsYXNzIHtcbiAgICAvKipcbiAgICAgKiBSZWR1Y2UgcmVuZGVyIGJsb2NraW5nIHJlcXVlc3RzIGJ5IGlubGluaW5nIGV4dGVybmFsIEdvb2dsZSBGb250cyBhbmQgQWRvYmUgRm9udHMgQ1NTXG4gICAgICogZGVmaW5pdGlvbnMgaW4gdGhlIGFwcGxpY2F0aW9uJ3MgSFRNTCBpbmRleCBmaWxlLiBUaGlzIG9wdGlvbiByZXF1aXJlcyBpbnRlcm5ldCBhY2Nlc3MuXG4gICAgICogYEhUVFBTX1BST1hZYCBlbnZpcm9ubWVudCB2YXJpYWJsZSBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IGEgcHJveHkgc2VydmVyLlxuICAgICAqL1xuICAgIGlubGluZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogRW5hYmxlcyBvcHRpbWl6YXRpb24gb2YgdGhlIHN0eWxlcyBvdXRwdXQuXG4gKi9cbmV4cG9ydCB0eXBlIFN0eWxlc1VuaW9uID0gYm9vbGVhbiB8IFN0eWxlc0NsYXNzO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlc0NsYXNzIHtcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGFuZCBpbmxpbmUgY3JpdGljYWwgQ1NTIGRlZmluaXRpb25zIHRvIGltcHJvdmUgZmlyc3QgcGFpbnQgdGltZS5cbiAgICAgKi9cbiAgICBpbmxpbmVDcml0aWNhbD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogTWluaWZ5IENTUyBkZWZpbml0aW9ucyBieSByZW1vdmluZyBleHRyYW5lb3VzIHdoaXRlc3BhY2UgYW5kIGNvbW1lbnRzLCBtZXJnaW5nXG4gICAgICogaWRlbnRpZmllcnMgYW5kIG1pbmltaXppbmcgdmFsdWVzLlxuICAgICAqL1xuICAgIG1pbmlmeT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogRGVmaW5lIHRoZSBvdXRwdXQgZmlsZW5hbWUgY2FjaGUtYnVzdGluZyBoYXNoaW5nIG1vZGUuXG4gKi9cbmV4cG9ydCBlbnVtIE91dHB1dEhhc2hpbmcge1xuICAgIEFsbCA9IFwiYWxsXCIsXG4gICAgQnVuZGxlcyA9IFwiYnVuZGxlc1wiLFxuICAgIE1lZGlhID0gXCJtZWRpYVwiLFxuICAgIE5vbmUgPSBcIm5vbmVcIixcbn1cblxuLyoqXG4gKiBQb2x5ZmlsbHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGJ1aWxkLlxuICovXG5leHBvcnQgdHlwZSBQb2x5ZmlsbHMgPSBzdHJpbmdbXSB8IHN0cmluZztcblxuZXhwb3J0IHR5cGUgU2NyaXB0RWxlbWVudCA9IFNjcmlwdENsYXNzIHwgc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjcmlwdENsYXNzIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYnVuZGxlIG5hbWUgZm9yIHRoaXMgZXh0cmEgZW50cnkgcG9pbnQuXG4gICAgICovXG4gICAgYnVuZGxlTmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgYnVuZGxlIHdpbGwgYmUgcmVmZXJlbmNlZCBpbiB0aGUgSFRNTCBmaWxlLlxuICAgICAqL1xuICAgIGluamVjdD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGZpbGUgdG8gaW5jbHVkZS5cbiAgICAgKi9cbiAgICBpbnB1dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIE91dHB1dCBzb3VyY2UgbWFwcyBmb3Igc2NyaXB0cyBhbmQgc3R5bGVzLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlXG4gKiBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvd29ya3NwYWNlLWNvbmZpZyNzb3VyY2UtbWFwLWNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCB0eXBlIFNvdXJjZU1hcFVuaW9uID0gYm9vbGVhbiB8IFNvdXJjZU1hcENsYXNzO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvdXJjZU1hcENsYXNzIHtcbiAgICAvKipcbiAgICAgKiBPdXRwdXQgc291cmNlIG1hcHMgdXNlZCBmb3IgZXJyb3IgcmVwb3J0aW5nIHRvb2xzLlxuICAgICAqL1xuICAgIGhpZGRlbj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3V0cHV0IHNvdXJjZSBtYXBzIGZvciBhbGwgc2NyaXB0cy5cbiAgICAgKi9cbiAgICBzY3JpcHRzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBPdXRwdXQgc291cmNlIG1hcHMgZm9yIGFsbCBzdHlsZXMuXG4gICAgICovXG4gICAgc3R5bGVzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBSZXNvbHZlIHZlbmRvciBwYWNrYWdlcyBzb3VyY2UgbWFwcy5cbiAgICAgKi9cbiAgICB2ZW5kb3I/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgdG8gcGFzcyB0byBzdHlsZSBwcmVwcm9jZXNzb3JzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlUHJlcHJvY2Vzc29yT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogUGF0aHMgdG8gaW5jbHVkZS4gUGF0aHMgd2lsbCBiZSByZXNvbHZlZCB0byB3b3Jrc3BhY2Ugcm9vdC5cbiAgICAgKi9cbiAgICBpbmNsdWRlUGF0aHM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVFbGVtZW50ID0gU3R5bGVDbGFzcyB8IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYnVuZGxlIG5hbWUgZm9yIHRoaXMgZXh0cmEgZW50cnkgcG9pbnQuXG4gICAgICovXG4gICAgYnVuZGxlTmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgYnVuZGxlIHdpbGwgYmUgcmVmZXJlbmNlZCBpbiB0aGUgSFRNTCBmaWxlLlxuICAgICAqL1xuICAgIGluamVjdD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGZpbGUgdG8gaW5jbHVkZS5cbiAgICAgKi9cbiAgICBpbnB1dDogc3RyaW5nO1xufVxuIl19