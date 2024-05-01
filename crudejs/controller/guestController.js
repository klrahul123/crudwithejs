import guestModel from "../model/guestmodel.js";

class guestController { 

    static editForm = async (req, res) => {
        // console.log(req.params.id);
        // res.render('edit');
        try {
            var result = await guestModel.findById(req.params.id)
            res.render('edit', { data: result })
        }
        catch (err) {
            console.log(err);
        }
    }

    static updateData = async (req, res) => {
        //console.log(req.params.id);
        try {
            let data = await guestModel.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/')
        }
        catch (err) {
            console.log(err);
        }

    }


    static deleteData = async (req, res) => {
        console.log(req.params.id);

        try {
            const result = await guestModel.findByIdAndDelete(req.params.id)
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }

    }



    static getguest = async (req, res) => {
        try {
            const getresult = await guestModel.find();
            // console.log(getresult);
            res.render("index", { data: getresult });
        }
        catch (err) {
            console.log(err);
        }
    }

    static formget = async (req, res) => {
        try {
            res.render('create');
        }
        catch (err) {
            console.log(err);
        }
    }
    static createGuest = async (req, res) => {
        try {
            const existingGuest = await guestModel.findOne({ email: req.body.email });
            if (existingGuest) {
                res.send("Email already exists in the database.");
                return;
            }

            const newGuest = new guestModel(req.body);
            await newGuest.save();
            res.redirect('/')
        } catch (err) {
            console.log(err);

        }
    }



}

export default guestController