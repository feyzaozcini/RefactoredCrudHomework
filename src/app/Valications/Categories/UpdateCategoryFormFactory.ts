import { FormControl,FormGroup,Validators } from "@angular/forms";
import { UpdateCategoryRequestModel } from "../../Models/Categories/UpdateCategoryRequetModel";
import { baseCategoryForm } from "./BaseCategoryFormFactory";

export type UpdateCategoryForm = FormGroup<{
    id:FormControl<number>;
    name: FormControl<string>;
    description: FormControl<string>;
}>;

export function updateCategoryForm(){
    const base = baseCategoryForm();

    
    //#region
    /*create de dikakt ederseniz maxlength yok update de validation logic degisebilir
    aynı formcontrol yapısına ek validator eklemek isteyebiliriz
    bu şnhreitance degil override degil
    
    behavior composition davranış birleştirme*/
    //#endregion

    base.name.addValidators([Validators.maxLength(50)]);

    base.name.updateValueAndValidity({emitEvent:false}); //orijinal tetiklenemsin bunu tetikle update demek için

    /*

     */

    return new FormGroup({
        id:new FormControl(0, {validators: [Validators.required,Validators.min(1)],

        }),
        ...base,
    });
}

export function toUpdateCategoryRequest(form:UpdateCategoryForm):UpdateCategoryRequestModel{
    return{
        id: form.controls.id.value,
        categoryName: form.controls.name.value,
        description: form.controls.description.value,
    };
}