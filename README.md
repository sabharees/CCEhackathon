
Arduino code for food quality monitoring:
#define BLYNK_TEMPLATE_ID "TMPL3w4CWwuZX"
#define BLYNK_TEMPLATE_NAME "Food quality monitoring system"
#include <DHT.h>
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

#define DHTPIN D5
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

#define LDRPIN D0  // Connect TSL2561 sensor to analog pin A0
#define MQ3PIN A0

char auth[] = "TWuQE2EM-qjXuyUVmtmwL-uzhBEdMPUj";
char ssid[] = "vivo s1906";
char pass[] = "siva12345";

void setup() {
  Serial.begin(9600);

  dht.begin();

  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  Blynk.begin(auth, ssid, pass);
}

void loop() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  int lightLevel = analogRead(LDRPIN);
  int mq3Value = analogRead(MQ3PIN);

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");

  Serial.print("Light Level: ");
  Serial.println(lightLevel);

  Serial.print("MQ3 Sensor Value: ");
  Serial.println(mq3Value);

  Blynk.virtualWrite(V0, temperature);  // Virtual pin V5 for temperature
  Blynk.virtualWrite(V1, humidity);     // Virtual pin V6 for humidity
  Blynk.virtualWrite(V2, lightLevel);   // Virtual pin V7 for light level
  Blynk.virtualWrite(V3, mq3Value);     // Virtual pin V8 for MQ3 sensor value

  delay(2000);  // Delay for 2 seconds
}
