import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'; 
import { ImportCategoryCotroller } from '../modules/cars/useCases/importCategory/ImportCategoryController'; 

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
})

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryCotroller();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/import', upload.single('file'),importCategoryController.handle);

export { categoriesRoutes };