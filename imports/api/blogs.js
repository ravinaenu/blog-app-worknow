import {Mongo} from 'meteor/mongo';
import {Meteor} from  'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';


export const Blogs = new Mongo.Collection('blogs');

if (Meteor.isServer){
  Meteor.publish('blogs', function() {
    return Blogs.find({userId: this.userId});
  });

  Meteor.publish('allBlogs', function() {
    return Blogs.find();
  });
}


Meteor.methods({
'blogs.insert'(){
  if (!this.userId){
    throw new Meteor.Error('not-authorized');
  }
   return Blogs.insert({
    title: '',
    body: '',
    username: Meteor.user().username,
    userId: this.userId,
    updatedAt: moment().valueOf()
   });
},

'blogs.remove'(_id){
  if (!this.userId){
    throw new Meteor.Error('not-authorized');
  }

  new SimpleSchema ({
    _id: {
      type: String,
      min: 1
    }

  }).validate({_id});

  Blogs.remove({_id, userId: this.userId});  

},

'blogs.update'(_id, updates){
  if (!this.userId){
    throw new Meteor.Error('not-authorized');
  }
  new SimpleSchema ({
    _id: {
      type: String,
      min: 1
    },

    title: {
      type: String,
      optional: true
    },

    body: {
      type: String,
      optional: true
    },

    username: {
      type: String,
      optional: true
    }
  }).validate({
    _id,
    ...updates
  });


  Blogs.update({
    _id,
    userId: this.userId
  }, {
    $set: {
      updatedAt: moment().valueOf(),
      ...updates
    }
  });

}

});

