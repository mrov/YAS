import axios from "axios";

var apikey = "AIzaSyCsT0A3T88b_SZGThCfVnUy93BKQsZvjf8"

var requests = {
    search: async function(){
        var response = await axios({
            method: "GET",
            url: "https://www.googleapis.com/youtube/v3/search",
            params: {
                part: "snippet",
                channelId: "UCSJ4gkVC6NrvII8umztf0Ow",
                key: apikey
            },
        }).catch(err => console.log(err));
        return response
    }
}

export default requests