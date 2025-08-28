import WareHouse  from "../models/WareHouse.js"


export const gettree = async (req, res) =>{
    try{
    const {warehouse_code} = req.query;
    if(!warehouse_code){
        return res.staus(400).json({success: false, message:'code is req'});
    }


    const fetchloc = await WareHouse.find({});
    // console.log(fetchloc)

    const locationmap = {};
    fetchloc.forEach( loc =>{
        locationmap[loc.location_code]={
            location_code : loc.location_code,
            type: loc.type,
            childs:[]
        };
    });

    fetchloc.forEach(loc=>{
        if(loc.parent_of_location_code && locationmap[loc.parent_of_location_code])
        {
            locationmap[loc.parent_of_location_code].childs.push(locationmap[loc.location_code]);
        }
    });

    console.log(locationmap)

    const treestructure = locationmap[warehouse_code];
    if(!treestructure){
        return res.staus(404).json({success: false, message:"not found"});
    }
    return res.json(treestructure);
    }
    catch(err)
    {
        return res.status(500).json({success: false, message:'Server error', error: err.message});
    }
};