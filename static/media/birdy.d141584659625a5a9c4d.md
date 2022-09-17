## Technologies used :

* Server side : Java, MySql(ClearDB), MongoDB, Tomcat, Firebase, Pusher
* Coté client : HTML, CSS, React (Axios, Material Ui)
* Deployment : Heroku (Server), Netlify (Client)

**For the first action executed, it may take some time to load because heroku, the platform that host the server side, put the server app to sleep after 30min of inactivity.**

## Login section

The `user`insert his login `id` and `password`. Before it sends to the table `estConnecte` of the SQL table, we check if they are valid by sending a request to the table `utilisateurs`. the `id` is stored as a String and the password as a blob so we can't see the password without the a secret key. When the `user` logout or when the user is inactive, it will be remove from the table `estConnecte`.

![pic1](https://gitlab.com/alexandre_em/birdi/-/raw/master/wiki-img/new/01.png)

## Sign up section

On the `Sign up` page, the user can create an account and upload a profile picture that can't be changed in the future. The picture will be store in the folder `avatar` of the `Firebase storage` and the url + informations will be store on the SQL table `utilisateurs`.

![pic2](https://gitlab.com/alexandre_em/birdi/-/raw/master/wiki-img/new/02.png)

## Profile section

On the `profile page`, there are informations of the user visited, his `profile picture`, the number of `messages`, of `followers` and the `following` users. By clicking on it `message list`, `following list`, `follower list` will be display.

### Messages list

![pic4](https://gitlab.com/alexandre_em/birdi/-/raw/master/wiki-img/new/04.png)

### Follower/Following list

Relationships between users are stored in the SQL table `friends` and the messages in the mongoDB collection `messages`.

![pic5](https://gitlab.com/alexandre_em/birdi/-/raw/master/wiki-img/new/05.png)

## Main page section

When the user is connected, he can see all message send by user he is following, he can also post a new message or a picture or both. It will be automatically updated with `Pusher`, it allow to the app to communicate with servers and devices in real time.

![pic6](https://gitlab.com/alexandre_em/birdi/-/raw/master/wiki-img/new/06.png)

## Reply, Like section

By clicking on the `reply` button, the user will be redirect to the reply page of the selected message with the list of reply and a form to write one. By writing a reply, it will update the reply list by adding your new reply in real time.

![pic7](https://gitlab.com/alexandre_em/birdi/-/raw/master/wiki-img/new/07.png)

For each message/reply, the user can:
* like by clicking on the `heart` icon
* reply by clicking on the `arrow` icon
* delete by clicking on the `bin` icon
* go to the profile of the author of the message by clicking on his `id`,`name`, `profile picture`

### Like

By clicking on the `like` button, it will add `the user id` to the array `like` of the message. If he clicks a second time, it will cancel the like and remove his id from the array.

### Delete

The `delete` button is only available for the messages/reply the user is the author. By deleting a message/reply, it will update the message list in real time with `pusher`.

### Picture

Pictures uploaded by user are store in the folder `images` of the `Firebase storage`. By clicking on it, a modal of the picture will pop up. 

## Search

For the `Trends` and `Picture`, we use the `mongoDB` function `search`, it allow to search keywords on all the comments and sort it by `word score`. For the search an `user`, the user have to enter the exact `id` to have a result.

![pic11](https://gitlab.com/alexandre_em/birdi/-/raw/master/wiki-img/new/09.png)

### User

To find an `user`, it send a request to the SQL table `utilisateurs`.

![pic9](https://gitlab.com/alexandre_em/birdi/-/raw/master/wiki-img/new/11.png)

### Trends

It will display `messages` that contain the keyword in the `text` section and it sort by the most popular post.

![pic8](https://gitlab.com/alexandre_em/birdi/-/raw/master/wiki-img/new/08.png)

### Picture

It will display `messages` that contain the keyword in the `text` section and a picture.

![pic10](https://gitlab.com/alexandre_em/birdi/-/raw/master/wiki-img/new/10.png)

