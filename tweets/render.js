const render = (state) => {
    const tweetsDOM = document.getElementById('tweetsContainer');

    const tweetsHTML = state.map(function (tweet) {
        return `
            <div class="bg-white p-2 m-2 w-50">
                <div class="d-flex align-items-center">
                    <img width="50" src="${tweet.user.profilePic}" />
                    <div class="mt-4 ml-2">
                        <b>${tweet.user.username}</b>
                        ${tweet.user.isVerified ? '<img width="15" src="twitterIcons/check-circle.svg" />' : ''}
                        <p>${tweet.user.handle}</p>
                        
                    </div>
                </div>
                <h3>${tweet.text}</h3>
                <hr />
                <div class="d-flex text-secondary">
                    <img style="opacity: 0.62" src="twitterIcons/message-circle.svg" />
                    <b class="mr-3 ml-1">${tweet.replies}</b>
                    <img style="opacity: 0.62" src="twitterIcons/repeat.svg" />
                    <b class="mr-3 ml-1">${tweet.retweets}</b>
                    <img style="opacity: 0.62" src="twitterIcons/heart.svg" />
                    <b class="mr-3 ml-1">${tweet.likes}</b>
                </div>
            </div>
        `
    });

    tweetsDOM.innerHTML = `
        <div class="d-flex flex-column justify-content-start align-items-center mt-5">
            ${tweetsHTML.join('')}
        </div>
    `
}






//class exercise
// const initialState = {
//     id: 1,
//     name: "Cherie",
//     friends: [
//         {
//             name: "Grandma Thuglord Adamdopolis",
//             isBff: false
//         },
//         {
//             name: "Kamilah",
//             isBff: true
//         }
//     ],
//     dashboard: {
        
//     }

// }


// const reducer = (state, action) => {
//     const { type, newName, newFriend, friendToRemoveName, friendNameToPromote } = action;
//     // newFriend === { name: "Nick", isBff: false}
//     if (type === "CHANGE_CHERIES_NAME") {
//         return {
//             ...state,
//             name: newName
//         }
//     } else if (type === "ADD_A_NEW_FRIEND") {
//         return {
//             ...state,
//             friends: state.friends.concat(newFriend)            
//         }

//         return {
//             ...state,
//             friends: [
//                 ...state.friends,
//                 newFriend
//             ]
  
//         }
//     } else if (type === "REMOVE_A_FRIEND") {

        
//             return {
//                 ...state,
//                 friends: state.friends.filter(frand => frand.name != friendToRemoveName)
//             }

//     } else if (type === "PROMOTE_ONE_FRIEND_TO_BFF") {

//         return {
//             ...state,
//             friends: state.friends.map(friend => {
//                 if(friend.name === friendNameToPromote){
//                     return  {
//                         ...friend,
//                         isBff: true
//                     }
//                 }

//                 return friend
//             })
//         }

//         return {
//             ...state,
//             friends: state.friends.map(f => f.name === friendNameToPromote ? {...f, isBff: true} : f)
//         }

//     } else if (type === "PROMOTE_ALL_FRIENDS_TO_BFF") {
        
//         return {
//             ...state,
//             friends: state.friends.map(friend => {
//                 return  {
//                     ...friend,
//                     isBff: true
//                 }
//             })
//         }
        
//     }

//     return state;
// }


