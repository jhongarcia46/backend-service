import { Router } from "express";
import { 
    getAllproducts,
    getProductByID, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} from "../controllers/productControllers";

const productRoutes = Router(); 

/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: obtener todos los productos
 *    responses:
 *      200:
 *        description: lista de productos
 */         
productRoutes.get("products/", getAllproducts); 
productRoutes.get("products/id", getProductByID);
productRoutes.post("products/", createProduct);
productRoutes.put("products/id", updateProduct);
productRoutes.delete("products/id", deleteProduct);

export default productRoutes;