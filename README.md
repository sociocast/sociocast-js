# Sociocast JavaScript Library

##Overview
Here you will find the source code for the Sociocast JavaScript Library, which provides clients with a JavaScript wrapper for the Sociocast REST API functionality. Please see the [Sociocast JavaScript Helper Library](https://github.com/sociocast/sociocast-js-helpers) for general supportive utilities and functions.

##Usage

###Loading the Library in Sandbox Environment
To load the Sociocast JavaScript Library in our Sandbox enviroment, use the following code:

    // code to add to footer of your html document
    (function(a,b,c){function i(a){c[a]=function(){return c.is_loaded?_sociocast[a].apply(_sociocast,Array.prototype.slice.call(arguments,0)):(c.push([a].concat(Array.prototype.slice.call(arguments,0))),void 0)}}window.sociocast=c,c.is_loaded=!1;var f=function(a){for(var b=0;a.length>b;b++)_sociocast[a[b].shift()].apply(_sociocast,a[b])},g=document.createElement("script"),h=["init","entity_observe","entity_attributes_add","entity_attributes_set","entity_attributes_del","entity_attributes_modify","entity_profile"];for(g.type="text/javascript",g.src=b,g.async=!0,g.onreadystatechange=g.onload=function(){var a=g.readyState;f.done||a&&!/loaded|complete/.test(a)||(f.done=!0,f(c),c.is_loaded=!0)},(document.body||head).appendChild(g),e=0;h.length>e;e++)i(h[e])})(document,"http://api-sandbox.sociocast.com/1.0/js/sc.js",window.sociocast||[]);

Additionally, you can grab this code from your [Sociocast Console](https://console.sociocast.com). 

###Loading the Library in Sandbox Environment

To load the Sociocast JavaScript Library in our Production enviroment, use the following code:

    // code to add to footer of your html document
    (function(a,b,c){function i(a){c[a]=function(){return c.is_loaded?_sociocast[a].apply(_sociocast,Array.prototype.slice.call(arguments,0)):(c.push([a].concat(Array.prototype.slice.call(arguments,0))),void 0)}}window.sociocast=c,c.is_loaded=!1;var f=function(a){for(var b=0;a.length>b;b++)_sociocast[a[b].shift()].apply(_sociocast,a[b])},g=document.createElement("script"),h=["init","entity_observe","entity_attributes_add","entity_attributes_set","entity_attributes_del","entity_attributes_modify","entity_profile"];for(g.type="text/javascript",g.src=b,g.async=!0,g.onreadystatechange=g.onload=function(){var a=g.readyState;f.done||a&&!/loaded|complete/.test(a)||(f.done=!0,f(c),c.is_loaded=!0)},(document.body||head).appendChild(g),e=0;h.length>e;e++)i(h[e])})(document,"http://api-sandbox.sociocast.com/1.0/js/sc.js",window.sociocast||[]);

Additionally, you can grab this code from your [Sociocast Console](https://console.sociocast.com). 

###Initializing the Library

To initialize the library, call the `sociocast.init` with your client id, api key, and secret. You can retrieve these from your [Sociocast Console](https://console.sociocast.com). You can obtain an account by going to the [Sociocast website](http://www.sociocast.com).  

    /**
     * Intantiate the sociocast api client
     *
     * @param string client id
     * @param string api client key
     * @param string secret hash
     *
     */
     sociocast.init(**YOUR_CLIENT_ID**, **YOUR_API_KEY**, **YOUR_API_SECRET**);
     
Additionally, you can grab your exact client code from your [Sociocast Console](https://console.sociocast.com).      
