# HElkady-xo-game

Tic-tac-toe PWA: two players or vs computer (easy / medium / hard minimax) with a saved scoreboard.

## بالعربي
لعبة إكس أو للموبايل: ضد صاحبك أو ضد الكمبيوتر (سهل / متوسط / صعب)، وعداد نقاط محفوظ على الجهاز.

## Run
No build step. It is a static web app (PWA) that works on phones and desktop.

```
npm start        # serves the www folder, open the printed URL
npm test         # logic tests (Node 18+, no dependencies)
```

Deploy: upload the `www` folder to any static host (GitHub Pages, Netlify, Cloudflare Pages). On a phone, open the site and choose "Add to Home Screen" to install it like an app. The same code is already wrapped as an Android project (see below).

## التشغيل
مفيش بناء. افتح `index.html` من خلال أي سيرفر ساكن (`npm start`) أو ارفع مجلد www على GitHub Pages أو Netlify، وعلى الموبايل اختار "إضافة إلى الشاشة الرئيسية".

## Android app (Capacitor)
The `android/` folder is a ready Android Studio project (app id `com.helkady.xogame`, name "إكس أو"). The web code lives in `www/` and is copied into the Android project by `cap sync`.

Requirements: Node 18+, JDK 21 (the one bundled with a recent Android Studio is fine), Android Studio with Android SDK Platform 35.

```
npm install
npx cap sync android      # copies www/ into the Android project
npx cap open android      # opens Android Studio, then Run or Build > Build APK(s)
```

Or from the command line (needs JDK 21 and ANDROID_HOME set):

```
cd android
./gradlew assembleDebug
```

The debug APK is at `android/app/build/outputs/apk/debug/app-debug.apk`. Install it with `adb install -r app-debug.apk` or copy it to the phone. After any change in `www/`, run `npx cap sync android` again.

For a Play Store build use Android Studio: Build > Generate Signed Bundle / APK, and create your own keystore (never commit it).

## تطبيق أندرويد (Capacitor)
مجلد `android/` مشروع جاهز لـ Android Studio (معرّف التطبيق `com.helkady.xogame`). كود الويب في `www/` والأمر `cap sync` بينسخه جوه مشروع أندرويد.

المطلوب: Node 18+ و JDK 21 (اللي جاي مع Android Studio الحديث مناسب) و Android SDK Platform 35.

```
npm install
npx cap sync android
npx cap open android      # يفتح Android Studio، بعدين Build > Build APK(s)
```

أو من سطر الأوامر: `cd android && ./gradlew assembleDebug` وملف الـ APK هيكون في `android/app/build/outputs/apk/debug/app-debug.apk`.

لنسخة Google Play استخدم Build > Generate Signed Bundle / APK واعمل keystore خاص بيك ومترفعوش على GitHub.

## License
MIT
