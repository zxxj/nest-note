import { Controller, Get } from "@nestjs/common"

@Controller('a')
export class AppController {
	@Get('b')
	getHello(): string {
		return "hello"
	}
}

/**
 * @Controller是一个装饰器,用于定义控制器
 * 控制器是处理传入HTPP请求的核心组件,每个控制器负责处理特定的请求路径和对应的HTTP方法
 * 在控制器的内部会使用路由装饰器,如@Get @Post来定义请求路径和请求处理方法
 * 
 * @Get也是一个路由装饰器,用于将控制器的方法getHello映射到HTTP的get请求
 * 当客户端使用get方式访问路径/a/b时,会执行对应路径下的方法
 * 通过@Get装饰器,可以指定该方法处理特定路径上的get请求
 */