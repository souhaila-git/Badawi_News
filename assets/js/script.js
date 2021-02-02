/*

Simple blog front end demo in order to learn AngularJS - You can add new posts, add comments, and like posts.

*/


(function(){
    var app = angular.module('blogApp',[]);
    
    app.controller('BlogController', ['$http', function($http){
      
      var blog = this;
      blog.title = "Badawi News";
      
      blog.posts = {};
      $http.get('http://localhost:3000/posts').success(function(data){
        blog.posts = data;
        console.log(data);
      });
      
      blog.tab = 'blog';
      
      blog.selectTab = function(setTab){
        blog.tab = setTab;
        console.log(blog.tab)
      };
      
      blog.isSelected = function(checkTab){
        return blog.tab === checkTab;
      };
      
      blog.post = {};
      blog.addPost = function(){
        blog.post.createdOn = Date.now();
        blog.post.comments = [];
        blog.post.likes = 0;
        blog.post.dislikes=0;
        blog.posts.unshift(this.post);
        blog.tab = 0;
        blog.post ={};
      }; 
      
    }]);

    app.controller('reactionController', function($scope) {
      this.likedby = {};
      this.dislikedby = {};
      $scope.myVar = false;
      $scope.toggle = function() {
          $scope.myVar = !$scope.myVar;
      };
  });

    app.controller('CommentController', function(){
      this.comment = {};
      this.addComment = function(post){
        this.comment.createdOn = Date.now();
        post.comments.push(this.comment);
        this.comment ={};
      };
    });
   
  })();