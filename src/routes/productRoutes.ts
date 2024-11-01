import { Router } from "express";
import { 
    getAllproducts,
    getProductByID, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} from "../controllers/productControllers";

const router = Router(); 

router.get("products/", getAllproducts); 
router.get("products/id", getProductByID);
router.post("products/", createProduct);
router.put("products/id", updateProduct);
router.delete("products/id", deleteProduct);

export default router;