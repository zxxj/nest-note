// 导入NestFactory模块,它用于创建nest应用的实例
import { NestFactory } from "@nestjs/core"
// 导入App根模块
import { AppModule } from "./app.module"

// 定义一个异步函数,用来创建nest实例并启动应用
const bootstrap = async () => {

	// 使用NestFactory的静态方法create创建一个nest应用实例,并传入AppModule根模块
	const app = await NestFactory.create(AppModule)

	// 让应用实例监听8888端口启动HTTP服务器
	await app.listen(8888)
}

bootstrap()