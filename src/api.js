// import { mockData } from "./mock-data";
// import NProgress from "nprogress";
// import axios from "axios";


// /**
//  * 
//  */
// const removeQuery = () => {
//   if (window.history.pushState && window.location.pathname) {
//     var newurl =
//       window.location.protocol +
//       "//" +
//       window.location.host +
//       window.location.pathname;
//     window.history.pushState("", "", newurl);
//   } else {
//     newurl = window.location.protocol + "//" + window.location.host;
//     window.history.pushState("", "", newurl);
//   }
// };

// const checkToken = async (accessToken) => {
//   const result = await fetch(
//     `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
//   )
//     .then((res) => res.json())
//     .catch((error) => error.json());

//   return result.error ? false : true;
// };
// /**
//  *
//  * @param {*} events:
//  * The following function is to be in api.js.
//  * This function takes an events array, then uses map to create a new array with only locations.
//  * Lastly, we remove all duplicates by creating another new array by using the spread operator and spreading a Set.
//  * The Set removes all duplicates from the array
//  */
// const extractLocations = (events) => {
//   var extractLocatins = events.map((event) => event.location);
//   var locations = [...new Set(extractLocatins)];
//   return locations;
// };

// export const getEvents = async () => {
//     NProgress.start();
  
//     if (window.location.href.startsWith("http://localhost")) {
//       NProgress.done();
//       return mockData;
//     }
  
  
//     const token = await getAccessToken();
  
//     if (token) {
//       removeQuery();
//       const url = 'https://opfbzrzarh.execute-api.eu-central-1.amazonaws.com/dev/api/get-events' + '/' + token;
//       const result = await axios.get(url);
//       if (result.data) {
//         var locations = extractLocations(result.data.events);
//         localStorage.setItem("lastEvents", JSON.stringify(result.data));
//         localStorage.setItem("locations", JSON.stringify(locations));
//       }
//       NProgress.done();
//       return result.data.events;
//     }
// };

// export const getAccessToken = async () => {
//     const accessToken = localStorage.getItem('access_token');
//     const tokenCheck = accessToken && (await checkToken(accessToken));

//     if (!accessToken || tokenCheck.error) {
//       await localStorage.removeItem("access_token");
//       const searchParams = new URLSearchParams(window.location.search);
//       const code = await searchParams.get("code");
//       if (!code) {
//         const results = await axios.get(
//           "https://opfbzrzarh.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
//         );
//         const { authUrl } = results.data;
//         return (window.location.href = authUrl);
//       }
//       return code && getToken(code);
//     }
//     return accessToken;
// }


// const getToken = async (code) => {
//     try {
//         const encodeCode = encodeURIComponent(code);

//         const response = await fetch( 'https://opfbzrzarh.execute-api.eu-central-1.amazonaws.com/dev/api/token' + '/' + encodeCode);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`)
//         }
//         const { access_token } = await response.json();
//         access_token && localStorage.setItem("access_token", access_token);
//         return access_token;
//     } catch(error) {
//         error.json();
//     }
// }

// export {  extractLocations, getToken, checkToken  };

import { mockData } from './mock-data';
import axios from 'axios';
import NProgress from 'nprogress';

export const getAccessToken = async () => {
    const accessToken = localStorage.getItem('access_token');
    const tokenCheck = accessToken && (await checkToken(accessToken));

    if (!accessToken || tokenCheck.error) {
      await localStorage.removeItem("access_token");
      const searchParams = new URLSearchParams(window.location.search);
      const code = await searchParams.get("code");
      if (!code) {
        const results = await axios.get(
          "https://opfbzrzarh.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
        );
        const { authUrl } = results.data;
        return (window.location.href = authUrl);
      }
      return code && getToken(code);
    }
    return accessToken;

    
}

// export const checkToken = async (accessToken) => {
//     const result = await fetch(
//       `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
//     )
//       .then((res) => res.json())
//       .catch((error) => error.json());
  
//     return result;
// };


export const checkToken = async (accessToken) => {
    const result = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    )
      .then((res) => res.json())
      .catch((error) => error.json());
  
    return result;
  };


// export const getEvents = async () => {
//     NProgress.start();
//     if (window.location.href.startsWith("http://localhost")) {
//       NProgress.done();
//       return mockData;
//     }
  
//     if (!navigator.onLine) {
//       const data = localStorage.getItem("lastEvents");
//       NProgress.done();
//       return data ? JSON.parse(data).events : [];
//     }
  
//     const token = await getAccessToken();
//     if (token) {
//       removeQuery();
//       const url = `https://opfbzrzarh.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/${token}`;
//       const result = await axios.get(url);
//       if (result.data) {
//         var locations = extractLocations(result.data.events);
//         localStorage.setItem("lastEvents", JSON.stringify(result.data));
//         localStorage.setItem("locations", JSON.stringify(locations));
//       }
//       NProgress.done();
//       return result.data.events;
//     }
// };



//BEFORE ENTRY POINT

// export const getEvents = async () => {
//     NProgress.start();
  
//     if (window.location.href.startsWith('http://localhost')) {
//       NProgress.done();
//       return mockData;
//     }
  

//     if (!navigator.onLine) {
//         const data = localStorage.getItem('lastEvents');
//         console.log('offline'); //just here to see if it even registers
//         NProgress.done();
//         return data ? JSON.parse(data).events : [];
     
//       }
  
//     const token = await getAccessToken();
  
//     if (token) {
//       removeQuery();
//       const url =
//         `https://opfbzrzarh.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/${token}` +
//         token;
//       const result = await axios.get(url);
//       if (result.data) {
//         var locations = extractLocations(result.data.events);
//         localStorage.setItem('lastEvents', JSON.stringify(result.data));
//         localStorage.setItem('locations', JSON.stringify(locations));
//       }
//       NProgress.done();
//       return result.data.events;
//     }
//   };


export const getEvents = async () => {
    NProgress.start();
  
    // if (window.location.href.startsWith('http://localhost')) {
    //   NProgress.done();
    //   return mockData;
    // }

 
    // If running locally, use mock data
    if (window.location.href.indexOf('localhost') > -1) {
        NProgress.done();
        return mockData;
    }
  
    if (!navigator.onLine) {
      const data = localStorage.getItem('lastEvents');
      if (data) {
        try {
          const events = JSON.parse(data).events;
          NProgress.done();
          return events;
        } catch (error) {
          console.error(error);
          console.log('no data in local storage');
        }
      }
    }
  
    const token = await getAccessToken();
  
    if (token) {
      removeQuery();
      const url =
        `https://opfbzrzarh.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/${token}` +
        token;
      const result = await axios.get(url);
      if (result.data) {
        var locations = extractLocations(result.data.events);
        localStorage.setItem('lastEvents', JSON.stringify(result.data));
        localStorage.setItem('locations', JSON.stringify(locations));
      }
      NProgress.done();
      return result.data.events;
    }
  };
  


export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};



const removeQuery = () => {
    if (window.history.pushState && window.location.pathname) {
      var newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
      window.history.pushState("", "", newurl);
    } else {
      newurl = window.location.protocol + "//" + window.location.host;
      window.history.pushState("", "", newurl);
    }
};

const getToken = async (code) => {
    try {
        const encodeCode = encodeURIComponent(code);

        const response = await fetch( 'https://opfbzrzarh.execute-api.eu-central-1.amazonaws.com/dev/api/token' + '/' + encodeCode);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const { access_token } = await response.json();
        access_token && localStorage.setItem("access_token", access_token);
        return access_token;
    } catch(error) {
        error.json();
    }
}




//real code below

// import { mockData } from './mock-data';
// import axios from 'axios';
// import NProgress from 'nprogress';



// export const extractLocations = (events) => {
//     var extractLocations = events.map((event) => event.location);
//     var locations = [...new Set(extractLocations)];
//     return locations;
// };


// const checkToken = async (accessToken) => {
//     const result = await fetch(
//       `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
//     )
//       .then((res) => res.json())
//       .catch((error) => error.json());
  
//     return result;
// };




// export const getEvents = async () => {
//     NProgress.start();
  
//     if (window.location.href.startsWith("http://localhost")) {
//       NProgress.done();
//       return mockData;
//     }
//     if (!navigator.onLine) {
//         const data = localStorage.getItem("lastEvents");
//         NProgress.done();
//         return data?JSON.parse(events).events:[];
//     }

//     const token = await getAccessToken();
  
//     if (token) {
//       removeQuery();
//       const url = 'https://opfbzrzarh.execute-api.eu-central-1.amazonaws.com/dev/api/get-events' + '/' + token;
//       const result = await axios.get(url);
//       if (result.data) {
//         var locations = extractLocations(result.data.events);
//         localStorage.setItem("lastEvents", JSON.stringify(result.data));
//         localStorage.setItem("locations", JSON.stringify(locations));
//       }
//       NProgress.done();
//       return result.data.events;
//     }
// };

// const removeQuery = () => {
//     if (window.history.pushState && window.location.pathname) {
//       var newurl =
//         window.location.protocol +
//         "//" +
//         window.location.host +
//         window.location.pathname;
//       window.history.pushState("", "", newurl);
//     } else {
//       newurl = window.location.protocol + "//" + window.location.host;
//       window.history.pushState("", "", newurl);
//     }
// };

// const getToken = async (code) => {
//     try {
//         const encodeCode = encodeURIComponent(code);

//         const response = await fetch( 'https://opfbzrzarh.execute-api.eu-central-1.amazonaws.com/dev/api/token' + '/' + encodeCode);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`)
//         }
//         const { access_token } = await response.json();
//         access_token && localStorage.setItem("access_token", access_token);
//         return access_token;
//     } catch(error) {
//         error.json();
//     }
// }

// export const getAccessToken = async () => {
//     const accessToken = localStorage.getItem('access_token');
//     const tokenCheck = accessToken && (await checkToken(accessToken));

//     if (!accessToken || tokenCheck.error) {
//       await localStorage.removeItem("access_token");
//       const searchParams = new URLSearchParams(window.location.search);
//       const code = await searchParams.get("code");
//       if (!code) {
//         const results = await axios.get(
//           "https://opfbzrzarh.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
//         );
//         const { authUrl } = results.data;
//         return (window.location.href = authUrl);
//       }
//       return code && getToken(code);
//     }
//     return accessToken;
// }
