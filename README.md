![Alt text](/images/logo.png)

# Sociocast JavaScript Library

##Overview
Here you will find the source code for the Sociocast JavaScript Library, which provides clients with a JavaScript wrapper for the Sociocast REST API functionality. Please see the [Sociocast JavaScript Helper Library](https://github.com/sociocast/sociocast-js-helpers) for general supportive utilities and functions.

##Loading and Initializing the Library

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

##Methods

###`sociocast.entity_observe`
The `sociocast.entity_observe` method wraps the Sociocast `/entity/observe` REST API call. The `sociocast.entity_observe` call takes in three parameters:

* `evt` - the event type for the entity observation (i.e. view, search, share, click, etc)
* `eid` - the entity ID for which the event is being observed.
* `obs` - the observation as a key-valued JavaScript Array. 

The method is called as follows:

    sociocast.entity_observe(evt, eid, obs);
    
For example, to send a page view event with the Page Title and Page Path (using the Sociocast JavaScript Helper Library):

    var attribs = {};			
    attribs.page_title = sociocast_helper.getPageTitle();
    attribs.path_name = sociocast_helper.getPath();		
    sociocast.entity_observe("view", entityID, attribs);	


###`sociocast.entity_attributes_add`
The `sociocast.entity_attributes_add` wraps the Sociocast `/entity/attributes` REST API Call. Specifically, it allows you to add attributes to an entity. The `sociocast.entity_attributes_add` takes in two parameters:

* `eid` - the entity ID for which the attributes are being added.
* `attribs` - the attributes being added as a key-valued JavaScript Array.

If the key already exists, the function adds the value to the existing set of values. For instance: 

    sociocast.entity_attributes_add("91ea3bc9-e947", { "zip_lived" : 10010 });

###`sociocast.entity_attributes_set`
The `sociocast.entity_attributes_set` wraps the Sociocast `/entity/attributes` REST API Call. Specifically, it allows you to set attributes on an entity. The `sociocast.entity_attributes_set` takes in two parameters:

* `eid` - the entity ID for which the attributes are being set.
* `attribs` - the attributes being set as a key-valued JavaScript Array.

If the key already exists, the function replaces the value. For instance: 

    sociocast.entity_attributes_set("91ea3bc9-e947", { "age" : "25-30" });

###`sociocast.entity_attributes_del`
The `sociocast.entity_attributes_del` wraps the Sociocast `/entity/attributes` REST API Call. Specifically, it allows you to delete attributes for an entity. The `sociocast.entity_attributes_del` takes in two parameters:

* `eid` - the entity ID for which the attributes are being deleted.
* `attribs` - the attributes being deleted as a key-valued JavaScript Array.

For instance:

    sociocast.entity_attributes_del("91ea3bc9-e947", { "zip_lived" : 10010 });
    
You can use a `*` to delete all the values for a specific key. 
    
    sociocast.entity_attributes_del("91ea3bc9-e947", { "bluekai_segment" : "*" });

###`sociocast.entity_attributes_modify`
The `sociocast.entity_attributes_modify` wraps the Sociocast `/entity/attributes` REST API Call. Specifically, it allows you to add, set, and delete entity attributes in a single call.  The `sociocast.entity_attributes_modify` takes in two parameters:

* `eid` - the entity ID for which the attributes are being modified.
* `attribs` - the attributes being modified as a key-valued JavaScript Array.

For instance:

    sociocast.entity_attributes_modify("91ea3bc9-e947", {
	    'set' : { "age" : "25-30" },
	    'add' : { "zip_lived" : 10010 },
	    'del' : { "bluekai_segment" : "Auto Intender" }
    });

