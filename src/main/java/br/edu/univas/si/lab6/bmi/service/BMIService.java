package br.edu.univas.si.lab6.bmi.service;

public class BMIService {
	
	private BMIService(){
		//Jamais será instanciado com o new
	}

	public static Float getIndex(Float weight, Float height) {
		return weight / (height * height);
	}
	
	public static String getDescription (Float bmiIndex) {
		//Fazer isso em casa
		return "";
	}
}
