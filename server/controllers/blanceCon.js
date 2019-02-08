const Blance = require('../database/models/blance')
const User = require('../database/models/user')
const Transaction = require('../database/models/transaction')
const passport = require('../passport')

module.exports = {
    addBlance: (req, res) => {
        const newBlance = new Blance({
            blance: 500000
        })
        newBlance.save((err, blc) => {
            if (err) return res.json(err)
            res.json(blc)
        })
    },
    totalBlance: (req, res) => {
        Blance.find((err, blc) => {
            if (err) {
                console.log('Blance Error', err)
            } else {
                res.json(blc)
            }
        })
    },
    totalTransactions: (req, res) => {
        Transaction.find((err, tra) => {
            if (err) {
                console.log('Blance Error', err)
            } else {
                res.json(tra)
            }
        })
    },
    sellShare: (req, res) => {
        let reqArray = [];
        reqArray.push(req);
        reqArray.map((r) => {
            let qty = 2
            let sellBlance = r.body.blance * qty
            // console.log('Arrayblance', blance);
            Blance.find((err, blc) => {
                if (err) {
                    console.log('Blance Error', err)
                } else {
                    let newblc = blc[0].blance - sellBlance
                    console.log(newblc)
                    let userBlance = r.user.blance + parseInt(sellBlance);

                    let data = blc[0]
                    data.blance = newblc;
                    Blance.findByIdAndUpdate(blc[0]._id, data, (err, blc) => {
                        // res.json(blc);
                    })
                    r.user.blance = userBlance ;
                    User.findOneAndUpdate(r.user._id,r.user).then((err,usr)=>{
                        new Transaction({
                             user:usr,
                             amount:sellBlance,
                             qty:qty,
                             date:Date()
                         }).populate('user').save()
                         Transaction.find((err,tra)=> res.json(tra))
                    })
                  

                }
            })


        })
    },
    puchaseShare: (req, res) => {
        let reqArray = [];
        reqArray.push(req);
        reqArray.map((r) => {
            let qty = 2
            let sellBlance = r.body.blance * qty
            // console.log('Arrayblance', blance);
            Blance.find((err, blc) => {
                if (err) {
                    console.log('Blance Error', err)
                } else {
                    let newblc = blc[0].blance + sellBlance
                    console.log(newblc)
                    let userBlance = r.user.blance - parseInt(sellBlance);

                    let data = blc[0]
                    data.blance = newblc;
                    Blance.findByIdAndUpdate(blc[0]._id, data, (err, blc) => {
                        // res.json(blc);
                    })
                    r.user.blance = userBlance ;
                    User.findByIdAndUpdate(r.user._id,r.user,(err,usr)=>console.log(usr.blance))
                    new Transaction({
                        userid:r.user.id,
                        amount:sellBlance,
                        qty:qty,
                        date:Date()
                    }).save()
                    Transaction.find((err,tra)=> res.json(tra))

                }
            })
        })
    },

}