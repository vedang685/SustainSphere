import {SerializedLexicalNode, Spread, TextModeType} from "lexical";

type Blogs = {
    "_id":string,
    "title":string,
    "content":string,
    "date":string,
    "tags":string,
    "author":string,
}

type BlogResult = {
        blogs?: Blogs[],
}

