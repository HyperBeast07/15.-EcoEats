const functions = require("firebase-functions")
const admin = require("firebase-admin")

admin.initializeApp()


exports.addAdminRole = functions.https.onCall(async (data,context)=>{
    //get user and add custom claim (admin)
    return admin.auth().getUserByEmail(data.email).then(user =>{
        return admin.auth().setCustomUserClaims(user.uid,{
            admin: true
        });
    }).then(()=>{
        return {
            message:`Success ${data.email} has been made an admin`
        }
    }).catch(err =>{
        return err
    })
});