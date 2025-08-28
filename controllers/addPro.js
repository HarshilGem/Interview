import WareHouse from "../models/WareHouse.js";
import Product  from "../models/Product.js";


export const addProduct = async (req, res)=>{
    try{
        
        const { transaction_date, warehouse_code, products}  = req.body;
        
        // if(!transaction_date || !warehouse_code || !products || !Array.isArray(products))
        // {
        //     return res.staus(400).json({success: false, message: "Invalid body"});
        // }

        
        const fetchall  = await WareHouse.find({});
        const locmap = {};

        fetchall.forEach(loc =>{
            locmap[loc.location_code] = loc.parent_of_location_code;
        });

        function helper(location_code, warehouse_code){
            let code = location_code;
            while(code)
            {
                if(code===warehouse_code) return true;
                code = locmap[code];
            }
            return false;
        }

        // console.log(locmap);

        for(const it of products)
        {
            
            if(!helper(it.location_code, warehouse_code))
            {
                return res.status(400).json({message:"Location is not in warehouse"});
            }
        }
         

        console.log(req.body);
        await Product.create({ transaction_date, warehouse_code, products});

        return res.json({success: true, message: 'Product added'});
    }catch(err)
    {
        return res.status(500).json({success: false, message:"Server error", error: err.message});
    }
}