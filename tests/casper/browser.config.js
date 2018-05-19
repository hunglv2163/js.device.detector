/* eslint-disable require-jsdoc,  no-unused-vars, no-var */
function getBrowserTestData() {
  return {
    'safariMac': {
      'userAgentString':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 ' +
        '(KHTML, like Gecko) Version/9.1.2 Safari/601.7.7',
      'test': {
        'browserVersion': '9',
        'browserName': 'Apple Safari',
        'browserId': 'safari',
        'osVersion': '10_11_6',
        'osVersionString': '10_11_6',
        'osVersionCategories': '{"major":10,"minor":11,"bugfix":6}',
        'osVersionMajor': '10',
        'osVersionMinor': '11',
        'osVersionBugfix': '6',
        'osName': 'Apple Mac OS X',
        'osId': 'macos',
      },
    },
    'chromeMac': {
      'userAgentString':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 ' +
        '(KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36',
      'test': {
        'browserVersion': '58',
        'browserName': 'Google Chrome',
        'browserId': 'chrome',
        'osVersion': '10_12_4',
        'osVersionString': '10_12_4',
        'osVersionCategories': '{"major":10,"minor":12,"bugfix":4}',
        'osVersionMajor': '10',
        'osVersionMinor': '12',
        'osVersionBugfix': '4',
        'osName': 'Apple Mac OS X',
        'osId': 'macos',
      },
    },
    'msieWindows8': {
      'userAgentString':
        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)',
      'test': {
        'browserVersion': '10',
        'browserName': 'Microsoft Internet Explorer',
        'browserId': 'msie',
        'osVersion': '6.2',
        'osVersionString': '6.2',
        'osVersionCategories': '{"major":6,"minor":2,"bugfix":0}',
        'osVersionMajor': '6',
        'osVersionMinor': '2',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows 8',
        'osId': 'windows8',
      },
    },
    'blackberry9220': {
      'userAgentString':
        'Mozilla/5.0 (BlackBerry; U; BlackBerry 9220; en) ' +
        'AppleWebKit/534.11+ (KHTML, like Gecko) ' +
        'Version/7.1.0.523 Mobile Safari/534.11+',
      'test': {
        'browserVersion': '7',
        'browserName': 'Apple Safari',
        'browserId': 'safari',
        'osVersion': '0.0.0',
        'osVersionString': '0.0.0',
        'osVersionCategories': '{"major":0,"minor":0,"bugfix":0}',
        'osVersionMajor': '0',
        'osVersionMinor': '0',
        'osVersionBugfix': '0',
        'osName': 'BlackBerry OS',
        'osId': 'blackberry',
      },
    },
    'chromeWindows81': {
      'userAgentString':
        'Mozilla/5.0 (Windows NT 6.3; Win64; x64) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/60.0.3112.90 Safari/537.36',
      'test': {
        'browserVersion': '60',
        'browserName': 'Google Chrome',
        'browserId': 'chrome',
        'osVersion': '6.3',
        'osVersionString': '6.3',
        'osVersionCategories': '{"major":6,"minor":3,"bugfix":0}',
        'osVersionMajor': '6',
        'osVersionMinor': '3',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows 8.1',
        'osId': 'windows81',
      },
    },
    'chromeAndroid': {
      'userAgentString':
        'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) ' +
        'AppleWebKit/535.19 (KHTML, like Gecko) ' +
        'Chrome/18.0.1025.166 Safari/535.19',
      'test': {
        'browserVersion': '18',
        'browserName': 'Google Chrome',
        'browserId': 'chrome',
        'osVersion': '4.1.1',
        'osVersionString': '4.1.1',
        'osVersionCategories': '{"major":4,"minor":1,"bugfix":1}',
        'osVersionMajor': '4',
        'osVersionMinor': '1',
        'osVersionBugfix': '1',
        'osName': 'Android Linux',
        'osId': 'android',
      },
    },
    'chromeLinux': {
      'userAgentString':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 ' +
        '(KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
      'test': {
        'browserVersion': '44',
        'browserName': 'Google Chrome',
        'browserId': 'chrome',
        'osVersion': '0.0.0',
        'osVersionString': '0.0.0',
        'osVersionCategories': '{"major":0,"minor":0,"bugfix":0}',
        'osVersionMajor': '0',
        'osVersionMinor': '0',
        'osVersionBugfix': '0',
        'osName': 'GNU/Linux OS',
        'osId': 'linux',
      },
    },
    'operaBsd': {
      'userAgentString':
        'Opera/9.80 (X11; FreeBSD 8.1-RELEASE i386; Edition Next) ' +
        'Presto/2.12.388 Version/12.10',
      'test': {
        'browserVersion': '9',
        'browserName': 'Opera',
        'browserId': 'opera',
        'osVersion': '0.0.0',
        'osVersionString': '0.0.0',
        'osVersionCategories': '{"major":0,"minor":0,"bugfix":0}',
        'osVersionMajor': '0',
        'osVersionMinor': '0',
        'osVersionBugfix': '0',
        'osName': 'BSD OS',
        'osId': 'bsd',
      },
    },
    'darwinMail': {
      'userAgentString':
        'Mail/3124 CFNetwork/760.5.1 Darwin/15.5.0 (x86_64)',
      'test': {
        'browserVersion': '0',
        'browserName': 'unknown',
        'browserId': 'unknown',
        'osVersion': '0.0.0',
        'osVersionString': '0.0.0',
        'osVersionCategories': '{"major":0,"minor":0,"bugfix":0}',
        'osVersionMajor': '0',
        'osVersionMinor': '0',
        'osVersionBugfix': '0',
        'osName': 'unknown',
        'osId': 'unknown',
      },
    },
    'safariIpad': {
      'userAgentString':
        'Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) ' +
        'AppleWebKit/602.4.6 (KHTML, like Gecko) ' +
        'Version/10.0 Mobile/14D27 Safari/602.1',
      'test': {
        'browserVersion': '10',
        'browserName': 'Apple Safari',
        'browserId': 'safari',
        'osVersion': '10_2_1',
        'osVersionString': '10_2_1',
        'osVersionCategories': '{"major":10,"minor":2,"bugfix":1}',
        'osVersionMajor': '10',
        'osVersionMinor': '2',
        'osVersionBugfix': '1',
        'osName': 'Apple iOS',
        'osId': 'ios',
      },
    },
    'safariIphone': {
      'userAgentString':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) ' +
        'AppleWebKit/604.1.38 (KHTML, like Gecko) ' +
        'Version/11.0 Mobile/15A372 Safari/604.1',
      'test': {
        'browserVersion': '11',
        'browserName': 'Apple Safari',
        'browserId': 'safari',
        'osVersion': '11_0',
        'osVersionString': '11_0',
        'osVersionCategories': '{"major":11,"minor":0,"bugfix":0}',
        'osVersionMajor': '11',
        'osVersionMinor': '0',
        'osVersionBugfix': '0',
        'osName': 'Apple iOS',
        'osId': 'ios',
      },
    },
    'safariIphone2': {
      'userAgentString':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_5 like Mac OS X) ' +
        'AppleWebKit/604.5.6 (KHTML, like Gecko) ' +
        'Version/11.0 Mobile/15D60 Safari/604.1',
      'test': {
        'browserVersion': '11',
        'browserName': 'Apple Safari',
        'browserId': 'safari',
        'osVersion': '11_2_5',
        'osVersionString': '11_2_5',
        'osVersionCategories': '{"major":11,"minor":2,"bugfix":5}',
        'osVersionMajor': '11',
        'osVersionMinor': '2',
        'osVersionBugfix': '5',
        'osName': 'Apple iOS',
        'osId': 'ios',
      },
    },
    'ieMobileWindowsPhone': {
      'userAgentString':
        'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; ' +
        'Trident/7.0; Touch; rv:11.0; IEMobile/11.0; Microsoft; ' +
        'Lumia 640 LTE) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 ' +
        '(KHTML, like Gecko) Mobile Safari/537',
      'test': {
        'browserVersion': '11',
        'browserName': 'Microsoft Internet Explorer Mobile',
        'browserId': 'ieMobile',
        'osVersion': '8.1',
        'osVersionString': '8.1',
        'osVersionCategories': '{"major":8,"minor":1,"bugfix":0}',
        'osVersionMajor': '8',
        'osVersionMinor': '1',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows Phone',
        'osId': 'windowsPhone',
      },
    },
    'edgeWindowsPhone': {
      'userAgentString':
        'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 ' +
        'Mobile Safari/537.36 Edge/15.15063',
      'test': {
        'browserVersion': '15',
        'browserName': 'Microsoft Edge',
        'browserId': 'edge',
        'osVersion': '10.0',
        'osVersionString': '10.0',
        'osVersionCategories': '{"major":10,"minor":0,"bugfix":0}',
        'osVersionMajor': '10',
        'osVersionMinor': '0',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows Phone',
        'osId': 'windowsPhone',
      },
    },
    'chromeAndroid2': {
      'userAgentString':
        'Mozilla/5.0 (Linux; Android 5.1; iris 550 Build/LRX21M) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 ' +
        'Chrome/37.0.0.0 Mobile Safari/537.36;',
      'test': {
        'browserVersion': '37',
        'browserName': 'Google Chrome',
        'browserId': 'chrome',
        'osVersion': '5.1',
        'osVersionString': '5.1',
        'osVersionCategories': '{"major":5,"minor":1,"bugfix":0}',
        'osVersionMajor': '5',
        'osVersionMinor': '1',
        'osVersionBugfix': '0',
        'osName': 'Android Linux',
        'osId': 'android',
      },
    },
    'msie7Windows7': {
      'userAgentString':
        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; ' +
        'Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; ' +
        '.NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; ' +
        'InfoPath.3)',
      'test': {
        'browserVersion': '7',
        'browserName': 'Microsoft Internet Explorer',
        'browserId': 'msie',
        'osVersion': '6.1',
        'osVersionString': '6.1',
        'osVersionCategories': '{"major":6,"minor":1,"bugfix":0}',
        'osVersionMajor': '6',
        'osVersionMinor': '1',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows 7',
        'osId': 'windows7',
      },
    },
    'msie8windows7': {
      'userAgentString':
        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
      'test': {
        'browserVersion': '8',
        'browserName': 'Microsoft Internet Explorer',
        'browserId': 'msie',
        'osVersion': '6.1',
        'osVersionString': '6.1',
        'osVersionCategories': '{"major":6,"minor":1,"bugfix":0}',
        'osVersionMajor': '6',
        'osVersionMinor': '1',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows 7',
        'osId': 'windows7',
      },
    },
    'msie9windowsVista': {
      'userAgentString':
        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; ' +
        'WOW64; Trident/5.0)',
      'test': {
        'browserVersion': '9',
        'browserName': 'Microsoft Internet Explorer',
        'browserId': 'msie',
        'osVersion': '6.0',
        'osVersionString': '6.0',
        'osVersionCategories': '{"major":6,"minor":0,"bugfix":0}',
        'osVersionMajor': '6',
        'osVersionMinor': '0',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows Vista',
        'osId': 'windowsVista',
      },
    },
    'msie11windows81': {
      'userAgentString':
        'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; ' +
        'Touch; rv:11.0) like Gecko',
      'test': {
        'browserVersion': '11',
        'browserName': 'Microsoft Internet Explorer',
        'browserId': 'msie',
        'osVersion': '6.3',
        'osVersionString': '6.3',
        'osVersionCategories': '{"major":6,"minor":3,"bugfix":0}',
        'osVersionMajor': '6',
        'osVersionMinor': '3',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows 8.1',
        'osId': 'windows81',
      },
    },
    'msie8WindowsXp': {
      'userAgentString':
        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; ' +
        'Trident/4.0; InfoPath.2)',
      'test': {
        'browserVersion': '8',
        'browserName': 'Microsoft Internet Explorer',
        'browserId': 'msie',
        'osVersion': '5.1',
        'osVersionString': '5.1',
        'osVersionCategories': '{"major":5,"minor":1,"bugfix":0}',
        'osVersionMajor': '5',
        'osVersionMinor': '1',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows XP',
        'osId': 'windowsXp',
      },
    },
    'msie10windows8': {
      'userAgentString':
        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)',
      'test': {
        'browserVersion': '10',
        'browserName': 'Microsoft Internet Explorer',
        'browserId': 'msie',
        'osVersion': '6.2',
        'osVersionString': '6.2',
        'osVersionCategories': '{"major":6,"minor":2,"bugfix":0}',
        'osVersionMajor': '6',
        'osVersionMinor': '2',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows 8',
        'osId': 'windows8',
      },
    },
    'edgeWindows10': {
      'userAgentString':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
        '(KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393',
      'test': {
        'browserVersion': '14',
        'browserName': 'Microsoft Edge',
        'browserId': 'edge',
        'osVersion': '10.0',
        'osVersionString': '10.0',
        'osVersionCategories': '{"major":10,"minor":0,"bugfix":0}',
        'osVersionMajor': '10',
        'osVersionMinor': '0',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows 10',
        'osId': 'windows10',
      },
    },
    'edgeWindows102': {
      'userAgentString':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
        '(KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10532',
      'test': {
        'browserVersion': '12',
        'browserName': 'Microsoft Edge',
        'browserId': 'edge',
        'osVersion': '10.0',
        'osVersionString': '10.0',
        'osVersionCategories': '{"major":10,"minor":0,"bugfix":0}',
        'osVersionMajor': '10',
        'osVersionMinor': '0',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows 10',
        'osId': 'windows10',
      },
    },
    'firefoxWindows7': {
      'userAgentString':
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) ' +
        'Gecko/20100101 Firefox/54.0',
      'test': {
        'browserVersion': '54',
        'browserName': 'Mozilla Firefox',
        'browserId': 'firefox',
        'osVersion': '6.1',
        'osVersionString': '6.1',
        'osVersionCategories': '{"major":6,"minor":1,"bugfix":0}',
        'osVersionMajor': '6',
        'osVersionMinor': '1',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows 7',
        'osId': 'windows7',
      },
    },
    'firefoxWindows10': {
      'userAgentString':
        'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:48.0) ' +
        'Gecko/20100101 Firefox/48.0',
      'test': {
        'browserVersion': '48',
        'browserName': 'Mozilla Firefox',
        'browserId': 'firefox',
        'osVersion': '10.0',
        'osVersionString': '10.0',
        'osVersionCategories': '{"major":10,"minor":0,"bugfix":0}',
        'osVersionMajor': '10',
        'osVersionMinor': '0',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows 10',
        'osId': 'windows10',
      },
    },
    'firefoxMacOsX': {
      'userAgentString':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:50.0) ' +
        'Gecko/20100101 Firefox/50.0',
      'test': {
        'browserVersion': '50',
        'browserName': 'Mozilla Firefox',
        'browserId': 'firefox',
        'osVersion': '10.12',
        'osVersionString': '10.12',
        'osVersionCategories': '{"major":10,"minor":12,"bugfix":0}',
        'osVersionMajor': '10',
        'osVersionMinor': '12',
        'osVersionBugfix': '0',
        'osName': 'Apple Mac OS X',
        'osId': 'macos',
      },
    },
    'firefoxLinux': {
      'userAgentString':
        'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:48.0) ' +
        'Gecko/20100101 Firefox/48.0',
      'test': {
        'browserVersion': '48',
        'browserName': 'Mozilla Firefox',
        'browserId': 'firefox',
        'osVersion': '0.0.0',
        'osVersionString': '0.0.0',
        'osVersionCategories': '{"major":0,"minor":0,"bugfix":0}',
        'osVersionMajor': '0',
        'osVersionMinor': '0',
        'osVersionBugfix': '0',
        'osName': 'GNU/Linux OS',
        'osId': 'linux',
      },
    },
  };
}
