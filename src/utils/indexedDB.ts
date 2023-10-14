export default class DB{
    private dbName: string // 数据库名称
    private db: any  // 数据库对象
    constructor(dbName: string) {
        this.dbName = dbName
    }


    public openStore( storeName: string, keyPath: string, indexs?: Array<string>){
        const request = window.indexedDB.open(this.dbName, 3)
        return new Promise((resolve, reject) => {
            request.onsuccess = (event: any) => {
                console.log('数据库打开成功')
                this.db = event.target.result
                console.log(event)
                resolve(true)
            }
            request.onerror = (event) => {
                console.log('数据库打开失败')
                console.log(event)
                reject(event)
            }
            request.onupgradeneeded = (event) => {
                console.log('数据库升级成功')
                const {result}: any = event.target
                const store = result.createObjectStore(storeName, {
                    autoIncrement: true,
                    keyPath
                })
                if (indexs && indexs.length > 0) {
                    indexs.map((v: string) => {
                        store.createIndex(v, v, {unique: false})
                    })
                }
                store.transaction.oncomplete = (event: any) => {
                    console.log('创建对象仓库成功')
                }
                console.log(event)
            }
        })
    }
    updateItem(storeName: string,data: any){
        const  store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request =  store.put({
            ...data, updateTime: new Date().getTime()}
        )
        return new Promise((resolve, reject) => {
            request.onsuccess = (event: any) => {
                console.log('数据写入成功')
                console.log(event)
                resolve(event)
            }
            request.onerror = (event: any) => {
                console.log('数据写入失败')
                console.log(event)
                reject(event)
            }
        })
    }

    deleteItem(storeName: string,key: number | string){
        const  store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request =  store.delete(key)
        return new Promise((resolve, reject) => {
            request.onsuccess = (event: any) => {
                console.log('数据删除成功')
                console.log(event)
                resolve(event)
            }
            request.onerror = (event: any) => {
                console.log('数据删除失败')
                console.log(event)
                reject(event)
            }
        })
    }

    // 查询所有数据
    getList(storeName :string){
        const  store = this.db.transaction(storeName).objectStore(storeName)
        const request =  store.getAll()
        return new Promise((resolve, reject) => {
            request.onsuccess = (event: any) => {
                console.log('查询所有数据成功')
                console.log(event.target.result)
                resolve(event.target.result)
            }
            request.onerror = (event: any) => {
                console.log('查询所有数据失败')
                console.log(event)
            }
        })
    }

    // 查询某一条数据
    getItem(storeName :string,key: number | string){
        const  store = this.db.transaction(storeName).objectStore(storeName)
        const request =  store.get(key)
        return new Promise((resolve, reject) => {
            request.onsuccess = (event: any) => {
                console.log('查询数据成功')
                console.log(event.target.result)
                resolve(event.target.result)
            }
            request.onerror = (event: any) => {
                console.log('查询数据失败')
                console.log(event)
                reject(event.target.result)
            }
        })
    }
}


