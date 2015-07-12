var mongoose =  require("mongoose");

var Schema = mongoose.Schema;

var blogSchema = Schema(
    {
        title: String,
        content: String,
        date: Date,
        visited: Number
    }
);

// 3������ model�����󶨵�schema��db��collection��
var Blog = mongoose.model('Blog', blogSchema, "Blog");   //������ ���ݿ⼯��"Blog"����
module.exports = Blog;