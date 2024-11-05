import { Router } from "express";
import { 
    getAllproducts,
    getProductByID, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} from "../controllers/productControllers";

const productRoutes = Router(); 

productRoutes.get("products/", getAllproducts); 
productRoutes.get("products/id", getProductByID);
productRoutes.post("products/", createProduct);
productRoutes.put("products/id", updateProduct);
productRoutes.delete("products/id", deleteProduct);

export default productRoutes;