import time
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.options import Options




options = Options()
#options.add_argument('--headless')
options.add_argument('--disable-gpu')  # Last I checked this was necessary.
driver = webdriver.Chrome('/bin/chromedriver', chrome_options=options)
driver.get('http://127.0.0.1:8000/')
time.sleep(2)


main=driver.find_element_by_id("mainNav")
main.click()
time.sleep(2)


surveybtn=driver.find_element_by_id("GetResultsButton")
surveybtn.click()
time.sleep(2)



about=driver.find_element_by_id("about")
about.click()
time.sleep(2)

donate=driver.find_element_by_id("donate")
donate.click()
time.sleep(2)

footer=driver.find_element_by_id("foooter-bg")
footer.click()
time.sleep(2)
#driver = webdriver.Chrome('/bin/chromedriver',chrome_options=chrome_options)


# driver=webdriver.Chrome('/bin/chromedriver')
# driver.get("http://127.0.0.1:8000/")

fname=driver.find_element_by_id("fname")
fname.send_keys("Donald")
time.sleep(3)

lname=driver.find_element_by_id("lname")
lname.send_keys("Trump")
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

driver.quit()
