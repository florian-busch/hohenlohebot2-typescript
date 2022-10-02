const { Schema } = require('mongoose');

export const ownTweetsSchema = new Schema({
  category: String,
  tweet: {
    created_at: Date,
    id: Number,
    id_str: String,
    text: String,
    truncated: Boolean,
    entities: {
      hashtags: Array,
      symbols: Array,
      user_mentions: Array,
      urls: Array
    },
    source: String,
    in_reply_to_status_id: Number,
    in_reply_to_status_id_str: String,
    in_reply_to_user_id: Number,
    in_reply_to_user_id_str: String,
    in_reply_to_screen_name: String,
    user: {
      id: Number,
      id_str: String,
      name: String,
      screen_name: String,
      location: String,
      description: String,
      url: String,
      entities: { 
        description: Object
      },
      protected: Boolean,
      followers_count: Number,
      friends_count: Number,
      listed_count: Number,
      created_at: Date,
      favourites_count: String,
      utc_offset: Number,
      time_zone: String,
      geo_enabled: Boolean,
      verified: Boolean,
      statuses_count: Number,
      lang: String,
      contributors_enabled: Boolean,
      is_translator: Boolean,
      is_translation_enabled: Boolean,
      profile_background_color: String,
      profile_background_image_url: String,
      profile_background_image_url_https: String,
      profile_background_tile: Boolean,
      profile_image_url: String,
      profile_image_url_https: String,
      profile_banner_url: String,
      profile_link_color: String,
      profile_sidebar_border_color: String,
      profile_sidebar_fill_color: String,
      profile_text_color: String,
      profile_use_background_image: Boolean,
      has_extended_profile: Boolean,
      default_profile: Boolean,
      default_profile_image: Boolean,
      following: Boolean,
      follow_request_sent: Boolean,
      notifications: Boolean,
      translator_type: String,
      withheld_in_countries: Array
    },
    geo: Object,
    coordinates: Object,
    place: Object,
    contributors: Object,
    is_quote_status: Boolean,
    retweet_count: Number,
    favorite_count: Number,
    favorited: Boolean,
    retweeted: Boolean,
  }
});