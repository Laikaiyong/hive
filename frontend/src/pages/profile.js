import * as React from "react";

import { Card, Badge, ToggleSwitch, PictureUploader } from "flowbite-react";
import CustomSidebar from "../components/custom-sidebar";

const ProfilePage = () => {
  return (
    <main>
      <CustomSidebar />
      <div className="ml-80">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Profile
        </h2>
        <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <div class="mb-4 col-span-full xl:mb-2">
          </div>
          <div class="col-span-full xl:col-auto">
          <Card>
            <h2 class="text-2xl font-semibold dark:text-white">
              Recent Contributions
            </h2>
            <ul class="space-y-4">
              <li class="flex justify-between items-center p-4 text-l">
                <span class="flex-grow w-1/4 pr-4">Ref No.</span>
                <span class="flex-grow w-1/4">Type</span>
                <span class="flex-grow w-1/4">Date</span>
                <span class="flex-grow w-1/4">Points Earned</span>
              </li>
              <li class="flex justify-between items-center p-4">
                <span class="flex-grow w-1/4 pr-4">001</span>
                <span class="flex-grow w-1/4">News Vote</span>
                <span class="flex-grow w-1/4">02/10/24</span>
                <span class="flex-grow w-1/4">+12</span>
              </li>
              <li class="flex justify-between items-center p-4">
                <span class="flex-grow w-1/4 pr-4">002</span>
                <span class="flex-grow w-1/4">News Upload</span>
                <span class="flex-grow w-1/4">02/12/24</span>
                <span class="flex-grow w-1/4">+50</span>
              </li>
              <li class="flex justify-between items-center p-4">
                <span class="flex-grow w-1/4 pr-4">003</span>
                <span class="flex-grow w-1/4">News Vote</span>
                <span class="flex-grow w-1/4">02/15/24</span>
                <span class="flex-grow w-1/4">+7</span>
              </li>
            </ul>
            </Card>
           
            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <h3 class="mb-4 text-xl font-semibold dark:text-white">
                Language & Time
              </h3>
              <div class="mb-4">
                <label
                  for="settings-language"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Select language
                </label>
                <select
                  id="settings-language"
                  name="countries"
                  class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option>English (US)</option>
                  <option>Italiano</option>
                  <option>Français (France)</option>
                  <option>正體字</option>
                  <option>Español (España)</option>
                  <option>Deutsch</option>
                  <option>Português (Brasil)</option>
                </select>
              </div>
              <div class="mb-6">
                <label
                  for="settings-timezone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Time Zone
                </label>
                <select
                  id="settings-timezone"
                  name="countries"
                  class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option>GMT+0 Greenwich Mean Time (GMT)</option>
                  <option>GMT+1 Central European Time (CET)</option>
                  <option>GMT+2 Eastern European Time (EET)</option>
                  <option>GMT+3 Moscow Time (MSK)</option>
                  <option>GMT+5 Pakistan Standard Time (PKT)</option>
                  <option>GMT+8 China Standard Time (CST)</option>
                  <option>GMT+10 Eastern Australia Standard Time (AEST)</option>
                </select>
              </div>
              <div>
                <button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Save all
                </button>
              </div>
            </div>
            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <div class="flow-root">
                <h3 class="text-xl font-semibold dark:text-white">
                  Social accounts
                </h3>
                <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                  <li class="py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-1 min-w-0">
                        <span class="block text-base font-semibold text-gray-900 truncate dark:text-white">
                          X Account
                        </span>
                        <a
                          href="#"
                          class="block text-sm font-normal truncate text-primary-700 hover:underline dark:text-primary-500">
                          www.twitter.com/diaodun
                        </a>
                      </div>
                      <div class="inline-flex items-center">
                        <a
                          href="#"
                          class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                          Disconnect
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-1 min-w-0">
                        <span class="block text-base font-semibold text-gray-900 truncate dark:text-white">
                          Phantom Account
                        </span>
                        <span class="block text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                          Not connected
                        </span>
                      </div>
                      <div class="inline-flex items-center">
                        <a
                          href="#"
                          class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                          Connect
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="pt-4 pb-6">
                    <div class="flex items-center space-x-4">
                      <div class="flex-1 min-w-0">
                        <span class="block text-base font-semibold text-gray-900 truncate dark:text-white">
                          Metamask Account
                        </span>
                        <span class="block text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                          Not connected
                        </span>
                      </div>
                      <div class="inline-flex items-center">
                        <a
                          href="#"
                          class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                          Connect
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div>
                  <button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Save all
                  </button>
                </div>
              </div>
              </div>
          </div>
          <div class="col-span-2">
          <Card>
            <img className="h-40 w-full object-contain" src="https://media.licdn.com/dms/image/C5603AQEk0KyIrKivVA/profile-displayphoto-shrink_100_100/0/1664031374671?e=1712188800&v=beta&t=kyDVCCIb8CeuwoZUtsNmAYmGV3bB8eC0-nEHpHR-ZaY"></img>
            <div>
              <h2 class="text-2xl font-semibold dark:text-white">0x_diaodun</h2>
              <p class="italic">
                "I love Ponzi Scams, memecoins and bull season NGMI serrr"
              </p>
              <p>Wallet Address: DnhmBBGMiK...NWqa</p>
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                Top Voter
              </span>
            </div>
          </Card>
            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <div class="flow-root">
                <h3 class="text-xl font-semibold dark:text-white">Sessions</h3>
                <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                  <li class="py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <svg
                          class="w-6 h-6 dark:text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-base font-semibold text-gray-900 truncate dark:text-white">
                          California 123.123.123.123
                        </p>
                        <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                          Chrome on macOS
                        </p>
                      </div>
                      <div class="inline-flex items-center">
                        <a
                          href="#"
                          class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                          Revoke
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="pt-4 pb-6">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <svg
                          class="w-6 h-6 dark:text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-base font-semibold text-gray-900 truncate dark:text-white">
                          Rome 24.456.355.98
                        </p>
                        <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                          Safari on iPhone
                        </p>
                      </div>
                      <div class="inline-flex items-center">
                        <a
                          href="#"
                          class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                          Revoke
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0">
            <div class="flow-root">
              <h3 class="text-xl font-semibold dark:text-white">
                Alerts & Notifications
              </h3>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                You can set up Hive to receive personalized notifications
              </p>
              <div class="divide-y divide-gray-200 dark:divide-gray-700">
                <div class="flex items-center justify-between py-4">
                  <div class="flex flex-col flex-grow">
                    <div class="text-lg font-semibold text-gray-900 dark:text-white">
                      Followed News
                    </div>
                    <div class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Get notified about your following users' activities.
                    </div>
                  </div>
                  <ToggleSwitch id="company-news" />
                </div>
                <div class="flex items-center justify-between py-4">
                  <div class="flex flex-col flex-grow">
                    <div class="text-lg font-semibold text-gray-900 dark:text-white">
                      Post Activity
                    </div>
                    <div class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Get notified when your news are upvoted or downvoted.
                    </div>
                  </div>
                  <ToggleSwitch id="account-activity" checked />
                </div>
                <div class="flex items-center justify-between pt-4">
                  <div class="flex flex-col flex-grow">
                    <div class="text-lg font-semibold text-gray-900 dark:text-white">
                      News Alert
                    </div>
                    <div class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Get alerted when new news are uploaded.
                    </div>
                  </div>
                  <ToggleSwitch id="new-messages" />
                </div>
              </div>
              <div class="mt-6">
                <button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Save all
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ProfilePage;

export const Head = () => <title>Profile</title>;
