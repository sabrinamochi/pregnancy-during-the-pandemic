// import * as admin from "firebase-admin";

const firebaseConfig = {
    apiKey: "AIzaSyBPZrhddeOBVJNXZ7jiGjTI1T-OEkMXDMQ",
    authDomain: "pregnancy-during-the-pandemic.firebaseapp.com",
    projectId: "pregnancy-during-the-pandemic",
    storageBucket: "pregnancy-during-the-pandemic.appspot.com",
    messagingSenderId: "768796239252",
    appId: "1:768796239252:web:b8d46e50f8209ffea95b81",
    measurementId: "G-3FGJQM7JYC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const database = firebase.database();
const $feedbackButton = d3.selectAll("div.rating-button");

function updateVote(answerData, section){
    const $selSection = d3.select(`#${section}`)
    // $selSection.selectAll(".rating-button")
    //     .style('pointer-events', 'none')
    const $selSectionVoteLike = $selSection.select('.vote-like')
        .html(`${answerData.length}`)
        .transition()
        .duration(1000)
        .style('opacity', 1)
        .transition()
        .delay(500)
        .duration(1000)
        .style('opacity', 0)
}

function getGroupedData(section) {
    database.ref(`/feedback/${section}`)
        .once('value')
        .then((snapshot) => {
            const allFeedback = Object.values(snapshot.val())
            updateVote(allFeedback, section)
        }).catch((error) => {
            console.error(error);
        });
}


function writeFeedbackData(time, section, answer) {
    database.ref(`feedback/${section}/${time}`).set({
        time,
        section,
        answer
    });
}


function init() {
    $feedbackButton.on("click", function () {
        let time = Date.now();
        let section = d3.select(this).attr("data-section");
        let answer = d3.select(this).attr("data-answer");
        writeFeedbackData(time, section, answer);
        getGroupedData(section);
    });
}

export default {
    init
}