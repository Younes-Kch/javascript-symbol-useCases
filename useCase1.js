/**
 * Use case 1
 * Metadata
 * One use case is to use symbol to and defineProperty for adding a hidden metadata on a object
 */

const kApiMetadata = Symbol('metadata')
 
class API {
    methodA(){
        const obj = {
            foo: 'bar'
        };
        const objMetadata = {
            version: 1
        }

        Object.defineProperty(obj, kApiMetadata, {
            enumerable: false,
            value: objMetadata
        })
        return obj
    }

    methodB(){
        console.log(obj)
        const objMetaData = obj[kApiMetadata]
        console.log(objMetaData);
    }
 }

 const test = new API()
 const obj = test.methodA()
 test.methodB(obj)



 