package com.xuzhu.fmsrealassetsservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class FmsRealassetsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FmsRealassetsServiceApplication.class, args);
	}
}
