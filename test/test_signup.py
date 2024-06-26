# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time
class TestSignup():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_signup(self):
    self.driver.get("http://localhost:3000/login")
    self.driver.set_window_size(654, 720)
    self.driver.find_element(By.LINK_TEXT, "REGISTER").click()
    self.driver.find_element(By.NAME, "a").click()
    self.driver.find_element(By.CSS_SELECTOR, "form > input:nth-child(3)").click()
    self.driver.find_element(By.CSS_SELECTOR, "form > input:nth-child(3)").send_keys("new123@gmail.com")
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(9)").click()
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(9)").send_keys("12345678")
    self.driver.find_element(By.CSS_SELECTOR, "form").click()
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(15)").click()
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(15)").send_keys("aadar")
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(21)").click()
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(21)").send_keys("asddasd")
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(27)").click()
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(27)").send_keys("asdasdad")
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(5)").click()
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(5)").send_keys("12345678")
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(11)").click()
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(11)").send_keys("560077")
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(23)").click()
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(23)").send_keys("asdf")
    self.driver.find_element(By.CSS_SELECTOR, "div > input:nth-child(3)").click()
    self.driver.find_element(By.CSS_SELECTOR, "div > input:nth-child(3)").send_keys("1234567889")
    self.driver.find_element(By.CSS_SELECTOR, ".checkbox_input > input:nth-child(1)").click()
    self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(4)").click()
    self.driver.find_element(By.CSS_SELECTOR, "button").click()
    time.sleep(3)
    assert self.driver.switch_to.alert.text == "Signup Successfull"
    
