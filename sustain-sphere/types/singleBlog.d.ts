type Blog = {
    "_id":string,
    "title":string,
    "content":string,
    "date":string,
    "tags":string,
    "author":string,
}

type SingleBlogResult = {
    blog?: Blog,
}

