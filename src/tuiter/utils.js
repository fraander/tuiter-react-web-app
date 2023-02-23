import reactStringReplace from "react-string-replace";

export default function replaceWithLinks(text) {
    let replacedText;

    // Match URLs
    const regex = /([\w.]+\.(?:com|cc|net|ru)[^,\s]*)/
    replacedText = reactStringReplace(text, regex, (match, i) => (
        <button className="text-decoration-underline" key={match + i}>{match}</button>
    ));

    // Match @-mentions
    replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
        <button className="text-decoration-underline" key={match + i}>@{match}</button>
    ));

    // Match hashtags
    replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
        <button className="text-decoration-underline" key={match + i}>#{match}</button>
    ));

    return replacedText
}