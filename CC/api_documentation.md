<h1>User Register</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/user/register</code></li>
		</ul>
	</li>
  <li>Request Body
  <ul>
    <li><code>name</code> as <code>string</code></li>
    <li><code>email</code> as <code>string</code></li>
    <li><code>password</code> as <code>string</code></li>
  </ul>
	</li>
	<li>Method
		<ul>
			<li>POST</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">{
    "user": "629c5f24ef39f1d43f13bfbd"
}</code></pre></li>
</ul>

<h1>Login</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/user/login</code></li>
		</ul>
	</li>
  <li>Request Body
  <ul>
    <li><code>email</code> as <code>string</code></li>
    <li><code>password</code> as <code>string</code></li>
  </ul>
	</li>
	<li>Method
		<ul>
			<li>POST</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjljNWYyNGVmMzlmMWQ0M2YxM2JmYmQiLCJpYXQiOjE2NTQ0MTU2OTh9.w0uHaj2aGkrV9zoA_te-5aarq0SQqHeESk4T2gv7E_A</code></pre></li>
</ul>

<h1>Get All Mentor</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/mentor</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">[
    {
        "_id": "629c63e8ef39f1d43f13bfc2",
        "name": "Wilis Wulandari",
        "expertise": "Financial",
        "price": 100000,
        "video": [],
        "mentee": [],
        "session": [],
        "date": "2022-06-05T08:06:00.544Z",
        "__v": 0
    }
]</code></pre></li>
</ul>

<h1>Add Mentor</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/mentor</code></li>
		</ul>
	</li>
  <li>Request Body
  <ul>
    <li><code>name</code> as <code>string</code></li>
    <li><code>expertise</code> as <code>string</code></li>
    <li><code>price</code> as <code>number</code></li>
  </ul>
	</li>
	<li>Method
		<ul>
			<li>POST</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">{
    "name": "Wilis Wulandari",
    "expertise": "Financial",
    "price": 100000,
    "video": [],
    "mentee": [],
    "session": [],
    "_id": "629c63e8ef39f1d43f13bfc2",
    "date": "2022-06-05T08:06:00.544Z",
    "__v": 0
}</code></pre></li>
</ul>

<h1>Get Specific Mentor By Id</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/mentor/:mentorId</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">{
    "_id": "629c63e8ef39f1d43f13bfc2",
    "name": "Wilis Wulandari",
    "expertise": "Financial",
    "price": 100000,
    "video": [],
    "mentee": [],
    "session": [],
    "date": "2022-06-05T08:06:00.544Z",
    "__v": 0
}</code></pre></li>
</ul>


<h1>Add Mentor Video</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/mentor/:mentorId/video</code></li>
		</ul>
	</li>
  <li>Request Body
  <ul>
    <li><code>title</code> as <code>string</code></li>
    <li><code>link</code> as <code>string</code></li>
  </ul>
	</li>
	<li>Method
		<ul>
			<li>POST</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">{
    "title": "Manajemen Keuangan",
    "link": "https://www.youtube.com/watch?v=G4dLcQJY_FM",
    "_id": "629c674aef39f1d43f13bfc6",
    "date": "2022-06-05T08:20:26.540Z",
    "owner": "629c63e8ef39f1d43f13bfc2",
    "__v": 0
}</code></pre></li>
</ul>

<h1>GET Mentor Video</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/mentor/:mentorId/video</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">[
    {
        "_id": "629c674aef39f1d43f13bfc6",
        "title": "Manajemen Keuangan",
        "link": "https://www.youtube.com/watch?v=G4dLcQJY_FM",
        "date": "2022-06-05T08:20:26.540Z",
        "owner": "629c63e8ef39f1d43f13bfc2",
        "__v": 0
    }
]</code></pre></li>
</ul>

<h1>Add Mentor Session</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/mentor/:mentorId/session</code></li>
		</ul>
	</li>
  <li>Request Body
  <ul>
    <li><code>date</code> as <code>Date</code></li>
	</li>
	<li>Method
		<ul>
			<li>POST</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">{
    "date": "2022-06-10T13:00:00.000Z",
    "_id": "629c6a3c0e55914b17c5a958",
    "mentor": "629c63e8ef39f1d43f13bfc2",
    "__v": 0
}</code></pre></li>
</ul>

<h1>Get Mentor Session</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/mentor/:mentorId/session</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">[
    {
        "_id": "629c6a3c0e55914b17c5a958",
        "date": "2022-06-10T13:00:00.000Z",
        "mentor": "629c63e8ef39f1d43f13bfc2",
        "__v": 0
    }
]</code></pre></li>
</ul>

<h1>Get All Session</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/session</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">[
    {
        "_id": "629c6a3c0e55914b17c5a958",
        "date": "2022-06-10T13:00:00.000Z",
        "mentor": "629c63e8ef39f1d43f13bfc2",
        "__v": 0
    }
]}</code></pre></li>
</ul>

<h1>Get Session by Id</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/session/:sessionId</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">{
    "_id": "629c6a3c0e55914b17c5a958",
    "date": "2022-06-10T13:00:00.000Z",
    "mentor": "629c63e8ef39f1d43f13bfc2",
    "__v": 0
}</code></pre></li>
</ul>

<h1>Get All Video</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/video</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">[
    {
        "_id": "629c674aef39f1d43f13bfc6",
        "title": "Manajemen Keuangan",
        "link": "https://www.youtube.com/watch?v=G4dLcQJY_FM",
        "date": "2022-06-05T08:20:26.540Z",
        "owner": "629c63e8ef39f1d43f13bfc2",
        "__v": 0
    }
]</code></pre></li>
</ul>

<h1>Get Specific Video by Id</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/video/:videoId</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">{
    "_id": "629c674aef39f1d43f13bfc6",
    "title": "Manajemen Keuangan",
    "link": "https://www.youtube.com/watch?v=G4dLcQJY_FM",
    "date": "2022-06-05T08:20:26.540Z",
    "owner": "629c63e8ef39f1d43f13bfc2",
    "__v": 0
}</code></pre></li>
</ul>

<h1>Add Webinar</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/webinar</code></li>
		</ul>
	</li>
  <li>Request Body
  <ul>
    <li><code>event</code> as <code>string</code></li>
    <li><code>date</code> as <code>Date to String</code></li>
  </ul>
	</li>
	<li>Method
		<ul>
			<li>POST</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">{
    "webinar": "629c6fdf0e55914b17c5a963"
}</code></pre></li>
</ul>

<h1>Get All Webinar</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/webinar</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">[
    {
        "_id": "629c6fdf0e55914b17c5a963",
        "event": "Webinar Managemen Keuangan",
        "date": "2022-06-10T12:00:00.000Z",
        "__v": 0
    }
]</code></pre></li>
</ul>

<h1>Get Specific Webinar By Id</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/webinar/:webinarId</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">{
    "_id": "629c6fdf0e55914b17c5a963",
    "event": "Webinar Managemen Keuangan",
    "date": "2022-06-10T12:00:00.000Z",
    "__v": 0
}</code></pre></li>
</ul>

<h1>Book Ticket Webinar</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/ticket/:webinarId/:userId</code></li>
		</ul>
	</li>
  <li>Request Body
  <ul>
    <li><code>is_booked</code> as <code>boolean</code></li>
  </ul>
	</li>
	<li>Method
		<ul>
			<li>POST</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">{
    "webinar": {
        "_id": "629c6fdf0e55914b17c5a963",
        "event": "Webinar Managemen Keuangan",
        "date": "2022-06-10T12:00:00.000Z",
        "__v": 0
    },
    "is_booked": true,
    "_id": "629c73e39c07169d9095ca79",
    "user_id": {
        "_id": "629c5f24ef39f1d43f13bfbd",
        "name": "Afif Zainal",
        "email": "afifah@gmail.com",
        "password": "$2a$10$aL3sGRX2r0M61JsqhkTjrO6VGkreMnAx3k39yUBEpSqzGmtWeBLky",
        "tickets": [
            "629c73e39c07169d9095ca79"
        ],
        "booking": [],
        "date": "2022-06-05T07:45:40.732Z",
        "__v": 2
    },
    "__v": 0
}</code></pre></li>
</ul>

<h1>Get Ticket by User Id</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/ticket/:userId</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">[
    "629c73e39c07169d9095ca79"
]</code></pre></li>
</ul>

<h1>Book Mentor </h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/booking/:sessionId/:userId</code></li>
		</ul>
	</li>
  <li>Request Body
  <ul>
    <li><code>is_booked</code> as <code>boolean</code></li>
  </ul>
	</li>
	<li>Method
		<ul>
			<li>POST</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">{
    "session": {
        "_id": "629c6a3c0e55914b17c5a958",
        "date": "2022-06-10T13:00:00.000Z",
        "mentor": "629c63e8ef39f1d43f13bfc2",
        "__v": 0
    },
    "mentee": [
        "629c5f24ef39f1d43f13bfbd"
    ],
    "is_booked": true,
    "_id": "629c75c79c07169d9095ca7f",
    "bookAt": "2022-06-05T09:22:15.189Z",
    "__v": 0
}</code></pre></li>
</ul>

<h1>Get Mentor Booking by User Id</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/booking/:userId</code></li>
		</ul>
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">[
    "629c772afe3db15e85382ba0"
]</code></pre></li>
</ul>

<h1>Get All Booking</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/booking</code></li>
		</ul>
	</li>
  <li>Request Body
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">[
    {
        "_id": "629c75c79c07169d9095ca7f",
        "session": {
            "_id": "629c6a3c0e55914b17c5a958",
            "date": "2022-06-10T13:00:00.000Z",
            "mentor": "629c63e8ef39f1d43f13bfc2",
            "__v": 0
        },
        "mentee": [
            "629c5f24ef39f1d43f13bfbd"
        ],
        "is_booked": true,
        "bookAt": "2022-06-05T09:22:15.189Z",
        "__v": 0
    },
    {
        "_id": "629c772afe3db15e85382ba0",
        "session": {
            "_id": "629c6a3c0e55914b17c5a958",
            "date": "2022-06-10T13:00:00.000Z",
            "mentor": "629c63e8ef39f1d43f13bfc2",
            "__v": 0
        },
        "mentee": [
            "629c5f24ef39f1d43f13bfbd"
        ],
        "is_booked": true,
        "bookAt": "2022-06-05T09:28:10.306Z",
        "__v": 0
    },
    {
        "_id": "629c7811fe3db15e85382ba9",
        "session": {
            "_id": "629c6a3c0e55914b17c5a958",
            "date": "2022-06-10T13:00:00.000Z",
            "mentor": "629c63e8ef39f1d43f13bfc2",
            "__v": 0
        },
        "mentee": [
            "629c77fefe3db15e85382ba5"
        ],
        "is_booked": true,
        "bookAt": "2022-06-05T09:32:01.489Z",
        "__v": 0
    }
]</code></pre></li>
</ul>

<h1>Get booking by session Id</h1>
<ul>
	<li>URL
		<ul>
			<li><code>/api/booking/session/:sessionId</code></li>
		</ul>
	</li>
  <li>Request Body
	</li>
	<li>Method
		<ul>
			<li>GET</li>
		</ul>
	</li>
	<li>Response<pre v-pre="" data-lang="json"><code class="lang-json">[
    "629d75dd543c4d05eae96df8",
    "629d771b6f2315c2aa1c74b5"
]</code></pre></li>
</ul>

