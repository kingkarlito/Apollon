package com.tu.hackathon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.feign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ApollonBackendApplication implements CommandLineRunner {

	@Autowired
  PlaylistQueue player;

	public static void main(String[] args) {
		SpringApplication.run(ApollonBackendApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {
		player.start();
	}
}
