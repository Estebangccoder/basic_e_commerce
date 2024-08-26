import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import {CreateProductDto} from './dto/create-product.dto'
import {ProductsService} from './products.service'
import {Product} from './entities/products.entity'
import { UpdateProductDto} from './dto/update-product.dto'

@Controller('products')
export class ProductsController {

    constructor(private productsService:ProductsService){}

    @Post()
    createProduct(@Body() newProduct:CreateProductDto): Promise<Product>{
        return this.productsService.createProduct(newProduct)
    }

    @Get()
    getProducts(): Promise<Product[]>{
        return this.productsService.getProducts()
    }

    @Get(':id')
    getProduct(@Param('id', ParseIntPipe) id:number): Promise<Product>{
        return this.productsService.getProduct(id)
    }

    @Delete()
    deleteProduct(@Param('id', ParseIntPipe) id:number){
        return this.productsService.deleteProduct(id)

    }

    @Patch()
    updateProduct(@Param('id, ParseIntPipe') id:number, @Body() product:UpdateProductDto){
        return this.productsService.updateProduct(id, product)
    }

}
