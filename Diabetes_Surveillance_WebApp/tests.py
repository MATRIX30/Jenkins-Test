# from django.test import TestCase
# import django_with_asserts
# Create your tests here.
# import django_with_asserts
# import django.test.with_asserts.case.TestCase
# from with_asserts import TestCase
from with_asserts.case import TestCase

class MyTest(TestCase):
    def test_view(self):
        resp = self.client.get('')

        with self.assertHTML(resp) as html:
            self.assertEqual(html.find('head/title').text, 'Diabetes-Surveilance -| Welcome')

    def test1(self):
        self.assertFalse(False)

    def test_surveyBtn(self):
        resp = self.client.get('')
        with self.assertHTML(resp, element_id='GetResultsButton') as elem:
            self.assertIsNotNone(elem)

    def test_SurveySection(self):
        resp = self.client.get('')
        with self.assertHTML(resp, element_id='survey') as survey:
            self.assertIsNotNone(survey)


    def test_false_is_false(self):
        print("Method: test_false_is_false.")
        self.assertFalse(False)

    # def test_false_is_true(self):
    #     print("Method: test_false_is_true.")
    #     self.assertTrue(True)
