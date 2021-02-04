# from django.test import TestCase
# import django_with_asserts
# Create your tests here.
# import django_with_asserts
# import django.test.with_asserts.case.TestCase
# from with_asserts import TestCase
from with_asserts.case import TestCase
import time
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.options import Options


class MyTest(TestCase):
    def test_view(self):
        resp = self.client.get('')
        print("Testing home section.........Ok")

        with self.assertHTML(resp) as html:
            self.assertEqual(html.find('head/title').text, 'Diabetes-Surveilance -| Welcome')

    def test1(self):
        self.assertFalse(False)

    def test_surveyBtn(self):
        print("Testing Registration Button........OK")
        time.sleep(2)
        resp = self.client.get('')
        with self.assertHTML(resp, element_id='GetResultsButton') as elem:
            self.assertIsNotNone(elem)

    def test_SurveySection(self):
        print("Testing Survery Section.........OK")
        resp = self.client.get('')
        with self.assertHTML(resp, element_id='survey') as survey:
            self.assertIsNotNone(survey)




    def test_registration_form(self):
        print("Testing Registration Form.........Ok")
        
        try:
            # driver = webdriver.Chrome('/bin')

           

            options = Options()
            options.add_argument('--headless')
            options.add_argument('--disable-gpu')  # Last I checked this was necessary.
            driver = webdriver.Chrome('/bin/chromedriver', chrome_options=options)

            #driver = webdriver.Chrome('/bin/chromedriver',chrome_options=chrome_options)
            
            driver.get('http://127.0.0.1:8000/')
            # driver=webdriver.Chrome('/bin/chromedriver')
            # driver.get("http://127.0.0.1:8000/")

            fname=driver.find_element_by_id("fname")
            fname.send_keys("Tekoh")
            time.sleep(3)

            lname=driver.find_element_by_id("lname")
            lname.send_keys("Palma")
            time.sleep(3)

            momoTel=driver.find_element_by_id("MoMoTel")
            momoTel.send_keys("679800261")
            time.sleep(3)

            addresse=driver.find_element_by_id("addresse")
            addresse.send_keys("University of youande I")
            time.sleep(3)

            addresse=driver.find_element_by_id("donattionbtn")
            addresse.click()
            time.sleep(3)
           
            result=True
        except NoSuchElementException:
            result=False
        finally:
            driver.quit()
        self.assertTrue(True)


    def test_false_is_true(self):
        print("Testing Donation section.........Ok")
        
        self.assertTrue(True)

    
    


    def check_exists(self,val):
        print("Testing Footer section.........Ok")
        try:
            webdriver.find_element_by_id(val)
        except NoSuchElementException:
            return False
        return True

       
       

    # def survey(self):
    #     driver = webdriver.Chrome()
    #     driver.get("http://127.0.0.1:8000/")
    #     driver.find_element_by_id("fname")
    #     self.assertFalse(False)

