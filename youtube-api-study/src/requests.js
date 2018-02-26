import axios from "axios";

var apikey = "AIzaSyCsT0A3T88b_SZGThCfVnUy93BKQsZvjf8"

var channelId = "UCYORLeAlZR_VK1_4Mu4eZwA"

var client_id = "888575029141-hibma7mkr7jola9kjj9gtgcgcunvk7as.apps.googleusercontent.com"

var redirect_uri = "http://localhost:3000"

//var response_type = ""


var requests = {
    OAuth2: async function(){
        var response = await axios({
            method: "POST",
            url: "https://accounts.google.com/o/oauth2/auth",
            params: {
                client_id: client_id,
                redirect_uri: redirect_uri,
                scope: "https://www.googleapis.com/auth/youtube.force-ssl",
                response_type: "token"
            },
        }).catch(err => console.log(err));
        console.log("bbbbbbbbbbbbbbbbbbbbbbbbb", response)
        return response
    },
    searchListSnippet: async function(){
        var response = await axios({
            method: "GET",
            url: "https://www.googleapis.com/youtube/v3/search",
            params: {
                part: "snippet",
                channelId: channelId,
                key: apikey
            },
        }).catch(err => console.log(err));
        return response
    },
    liveBroadcastsSnippet: async function(){
        var response = await axios({
            method: "GET",
            url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
            headers: {
                "authorization": "Bearer ya29.GltuBfMQkbI-inKfPFr2SJTt4qUjuRITNgK5HaQjXijYWSkDcT4BCWV7hadusYjzCei-maLmmPJESU6XnZzlvcWh8IINKpuq3N9DCB3enNDnUfjgP3CE9d7n8vug"
            },
            params: {
                part: "snippet",
                mine: "true",
                key: apikey
            },
        }).catch(err => console.log(err));
        console.log("aaaaaaaaaaaaaaaaa", response);
        return response
    }
}

export default requests