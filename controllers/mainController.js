import WareHouse from "../models/WareHouse.js";

export const createnew = async (req, res) => {
    try {
        const { location_code, parent_of_location_code } = req.body;

        const isExits = await WareHouse.findOne({ location_code });

        if (isExits) {
            return res.status(400).json({ success: false, message: 'already exits' });
        }

        let type;
        if (!parent_of_location_code) {
            type = 'warehouse';
        } else {
            const findparent = await WareHouse.findOne({ location_code: parent_of_location_code });
            

        if (!findparent) {
            return res.status(400).json({ success: false, message: 'Parent no' });
        }
        type = 'storage';
    }

        const insert = await WareHouse.create({ location_code, parent_of_location_code, type });

        return res.status(201).json({
            success: true, message: 'Creates success',
            data: {
                location_code: insert.location_code,
                parent_of_location_code: insert.parent_of_location_code,
                type: insert.type
            }
        });
    }catch(err)
    {
        return res.status(500).json({success: false, message:'Server error', error: err.message});
    }
};