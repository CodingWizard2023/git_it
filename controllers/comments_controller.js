const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req, res){
    Post.findById(req.body.post, function(err, post){
        if (post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(err, comment){
                // handle error
                if(err)
                {
                    req.flash('error','Error in creating a comment !!');
                }

                post.comments.push(comment);
                post.save();
                req.flash('success','Comment added successfully ');
                res.redirect('/');
            });
        }

    });
}


module.exports.destroy = function(req, res){
    Comment.findById(req.params.id, function(err, comment){
        if(err)
        {
            console.log('sdkf');
        }
        if (comment.user == req.user.id){

            let postId = comment.post;

            comment.remove();

            req.flash('success','Comment deleted');

            Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}}, function(err, post){
                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }
    });
}