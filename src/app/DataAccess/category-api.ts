import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { API_Config } from "../api.config";
import { CategoryResponseModel } from "../Models/Categories/CategoryResponseModel";
import { CreateCategoryRequestModel } from "../Models/Categories/CreateCategoryRequestModel";
import { UpdateCategoryRequestModel } from "../Models/Categories/UpdateCategoryRequetModel";


@Injectable({providedIn:'root'})
export class CategoryApi{
    private http = inject(HttpClient);
    private readonly url = `${API_Config.baseUrl}/${API_Config.endPoints.category}`;

    //getList
    async getAll():Promise<CategoryResponseModel[]> {
        return await lastValueFrom(this.http.get<CategoryResponseModel[]>(this.url));
    }

    //post create
    async create(body:CreateCategoryRequestModel) : Promise<string>{
        return await lastValueFrom(this.http.post(this.url,body,{responseType:'text'}));
    }

    //Put : Update
    async update(body:UpdateCategoryRequestModel):Promise<string>{
        return await lastValueFrom(this.http.put(this.url,body,{responseType:'text'}));
    }

    //delete
    async deleteById(id:number):Promise<string>{
        return await lastValueFrom(this.http.delete(this.url,{body:id,responseType:'text'}));
    }
}