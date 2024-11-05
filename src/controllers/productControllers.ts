import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

// traemos la tabla o entidad producto de la base de datos
const productRepository = AppDataSource.getRepository(Product);

// obtener todos los producto 
export const getAllproducts = async (req: Request, res: Response) => {
    try {
        const products = await productRepository.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({
            message: "Errror al obterner los productos."
        });
    }
};

// obtener un producto (GET)
export const getProductByID = async (req: Request, res: Response) => {
    try {
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({

            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Errror al obterner el producto."
        });
    }
}

// crear un producto (POST)
export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, description, price } = req.body;
        const product = new Product();

        product.name = name;
        product.description = description;
        product.price = price;

        await productRepository.save(product);
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({
            message: "error al crear el producto."
        });
    }
};

// actualizar un producto existente
export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { name, description, price } = req.body; // tomamos los datos del request
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        });

        // validamos que el producto tenga informacion
        if (product) {
            product.name = name ?? product.name;
            product.description = description ?? product.description;
            product.price = price ?? product.price;
            await productRepository.save(product);
            res.json(product)
        } else {
            res.status(404).json({
                message: "no se encontró el producto"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "error al crear el producto."
        });
    }
};

// eliminar un producto existente 
export const deleteProduct = async(req: Request, res: Response) => {
    try {
        // Buscamos el producto para eliminarlo 
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        });

        // validamos que el producto tenga información 
        if (product) { 
            await productRepository.remove(product);
            res.json({
                message: "Producto eliminado."
            });
        } else {
            res.status(404).json({
                message: "No se encontró el producto."
            });
        } 
    } catch(error) {
        res.status(500).json({
            message: "Error al eliminar el producto."
        });
    }
};