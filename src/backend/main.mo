import Text "mo:core/Text";
import Array "mo:core/Array";
import List "mo:core/List";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Float "mo:core/Float";

// No longer needed as no persistent variable changes were made

actor {
  type Product = {
    id : Nat;
    name : Text;
    price : Float;
    description : Text;
    images : [Text];
    tags : [Text];
    collection : ?Nat;
  };

  type Collection = {
    id : Nat;
    name : Text;
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  let products = Map.empty<Nat, Product>();
  let collections = Map.empty<Nat, Collection>();
  let contactMessages = List.empty<ContactMessage>();

  func initializeCatalog() {
    let collectionData : [(Nat, Collection)] = [
      (1, { id = 1; name = "Good Triumphs Over Evil" }),
      (2, { id = 2; name = "Dark Temptations" }),
      (3, { id = 3; name = "Battle Within" }),
      (4, { id = 4; name = "Living Off Experience" }),
    ];

    let productData : [(Nat, Product)] = [
      // Existing products (1-6)
      (
        1,
        {
          id = 1;
          name = "Angel Wings Hoodie";
          price = 79.99;
          description = "A hoodie featuring embroidered angel wings, symbolizing protection and hope.";
          images = ["angel_wings_hoodie"];
          tags = ["hoodie", "angel", "good"];
          collection = ?1;
        },
      ),
      (
        2,
        {
          id = 2;
          name = "Demon Slayer Denim";
          price = 129.99;
          description = "Denim jacket with intricate demon slayer designs, representing the fight against evil.";
          images = ["demon_slayer_denim"];
          tags = ["jacket", "denim", "evil"];
          collection = ?2;
        },
      ),
      (
        3,
        {
          id = 3;
          name = "Balance Tee";
          price = 39.99;
          description = "T-shirt featuring a yin-yang design, symbolizing the balance between good and evil.";
          images = ["balance_tee"];
          tags = ["t-shirt", "balance", "good", "evil"];
          collection = ?3;
        },
      ),
      (
        4,
        {
          id = 4;
          name = "Guardian Angel Jeans";
          price = 99.99;
          description = "Jeans with guardian angel motifs, offering protection and guidance.";
          images = ["guardian_angel_jeans"];
          tags = ["jeans", "angel", "protection"];
          collection = ?1;
        },
      ),
      (
        5,
        {
          id = 5;
          name = "Temptation Skirt";
          price = 59.99;
          description = "A skirt with subtle dark designs, representing the challenges of temptation.";
          images = ["temptation_skirt"];
          tags = ["skirt", "dark", "temptation"];
          collection = ?2;
        },
      ),
      (
        6,
        {
          id = 6;
          name = "Holy Grail Cap";
          price = 24.99;
          description = "Cap featuring the holy grail symbol, representing purity and righteousness.";
          images = ["holy_grail_cap"];
          tags = ["cap", "purity", "good"];
          collection = ?1;
        },
      ),
      // Additional 22 products (7-28)
      (
        7,
        {
          id = 7;
          name = "Shadow Fighter Jacket";
          price = 139.99;
          description = "A fusion of streetwear and varsity style, this jacket features mythological shadow warriors embroidered on the front and back, symbolizing the internal battle against your dark side.";
          images = ["shadow_fighter_jacket"];
          tags = ["jacket", "streetwear", "good", "evil"];
          collection = ?3;
        },
      ),
      (
        8,
        {
          id = 8;
          name = "Heavenly Balance Crewneck";
          price = 79.99;
          description = "This crewneck showcases a subtle, multi-layered graphic featuring angelic and demonic motifs blended in a harmonious abstract design. Perfect for those who embrace both darkness and light.";
          images = ["heavenly_balance_crewneck"];
          tags = ["crewneck", "balance", "angel", "demon"];
          collection = ?1;
        },
      ),
      (
        9,
        {
          id = 9;
          name = "Redemption Joggers";
          price = 89.99;
          description = "Featuring intricate prints of religious symbols and redemption themes, these joggers are great for those striving to overcome temptation.";
          images = ["redemption_joggers"];
          tags = ["joggers", "redemption", "good"];
          collection = ?3;
        },
      ),
      (
        10,
        {
          id = 10;
          name = "Nightmare Bomber Jacket";
          price = 169.99;
          description = "Designed with bold, almost gothic artwork, this bomber jacket represents the nightmares that challenge us to choose the right path.";
          images = ["nightmare_bomber_jacket"];
          tags = ["bomber", "nightmare", "evil"];
          collection = ?2;
        },
      ),
      (
        11,
        {
          id = 11;
          name = "Virtuous Vixen Skirt";
          price = 64.99;
          description = "A high-waisted mini skirt featuring a subtle pattern of traditional virtuous symbols for a females.";
          images = ["virtuous_vixen_skirt"];
          tags = ["skirt", "virtuous", "good"];
          collection = ?1;
        },
      ),
      (
        12,
        {
          id = 12;
          name = "Sacred Heart Tee";
          price = 54.99;
          description = "A unique blend of spirituality and fashion for a females, this tee features a subtle sacred heart graphic, representing the courage to resist evil.";
          images = ["sacred_heart_tee"];
          tags = ["t-shirt", "sacred", "good"];
          collection = ?1;
        },
      ),
      (
        13,
        {
          id = 13;
          name = "Soul Searcher Hoodie";
          price = 89.99;
          description = "This oversized hoodie encourages self-reflection and the journey to overcome inner demons. Adorned with mystical symbols and encouraging affirmations for a females.";
          images = ["soul_searcher_hoodie"];
          tags = ["hoodie", "soulsearch", "good", "evil"];
          collection = ?3;
        },
      ),
      (
        14,
        {
          id = 14;
          name = "Illumination Leggings";
          price = 74.99;
          description = "Featuring an artistic depiction of lightning bolts and candles, these leggings symbolize hope in times of darkness.";
          images = ["illumination_leggings"];
          tags = ["leggings", "illumination", "good"];
          collection = ?1;
        },
      ),
      (
        15,
        {
          id = 15;
          name = "Wings of Change Denim";
          price = 139.99;
          description = "A unique twist on classic denim, this jacket features bold, embroidered angel wings for a look that's both fierce and feminine.";
          images = ["wings_of_change_denim"];
          tags = ["denim", "wings", "good"];
          collection = ?1;
        },
      ),
      (
        16,
        {
          id = 16;
          name = "Twisted Fate Bodysuit";
          price = 99.99;
          description = "This sleek, body-hugging bodysuit features abstract patterns inspired by the twists and turns of life's journey between good and evil.";
          images = ["twisted_fate_bodysuit"];
          tags = ["bodysuit", "twisted", "good", "evil"];
          collection = ?3;
        },
      ),
      (
        17,
        {
          id = 17;
          name = "Enlightened Joggers";
          price = 84.99;
          description = "Stylish joggers adorned with subtle symbols of enlightenment and positivity, perfect for those seeking personal growth.";
          images = ["enlightened_joggers"];
          tags = ["joggers", "enlightened", "good"];
          collection = ?1;
        },
      ),
      (
        18,
        {
          id = 18;
          name = "Shadow Chaser Skirt";
          price = 59.99;
          description = "A playful yet fierce skirt that combines dark, shadowy hues with lighter, ethereal fabrics for a dynamic look for a females.";
          images = ["shadow_chaser_skirt"];
          tags = ["skirt", "shadow", "good", "evil"];
          collection = ?3;
        },
      ),
      (
        19,
        {
          id = 19;
          name = "Purity Pendant Tee";
          price = 46.99;
          description = "This elegant tee features a delicate pendant design symbolizing purity, strength, and the triumph of good over evil, tailored for a females.";
          images = ["purity_pendant_tee"];
          tags = ["tshirt", "purity", "good"];
          collection = ?1;
        },
      ),
      (
        20,
        {
          id = 20;
          name = "Temptation Twill Pants";
          price = 74.99;
          description = "Crafted with a bold, dark design symbolizing temptation, these pants are perfect for those embracing a rebellious yet elegant style for a females.";
          images = ["temptation_twill_pants"];
          tags = ["pants", "temptation", "evil"];
          collection = ?2;
        },
      ),
      (
        21,
        {
          id = 21;
          name = "Virtue Seekers Crewneck";
          price = 89.99;
          description = "A comfortable and empowering crewneck with affirmations and symbols of virtue, perfect for inspiring positive thoughts.";
          images = ["virtue_seekers_crewneck"];
          tags = ["crewneck", "virtue", "good"];
          collection = ?1;
        },
      ),
      (
        22,
        {
          id = 22;
          name = "Phoenix Rising Hoodie";
          price = 109.99;
          description = "This vibrant hoodie for a females features a phoenix rising from flames, symbolizing rebirth and the power to overcome darkness.";
          images = ["phoenix_rising_hoodie"];
          tags = ["hoodie", "phoenix", "good"];
          collection = ?1;
        },
      ),
      (
        23,
        {
          id = 23;
          name = "Living Off Experience Union Suit";
          price = 109.99;
          description = "Unique blend of comfort and statement style, this union suit features bold graphics depicting the journey of life experiences and choices between good and evil.";
          images = ["living_off_experience_union_suit"];
          tags = ["union suit", "experience", "good", "evil"];
          collection = ?4;
        },
      ),
      // Living Off Experience product category (24-33)
      (
        24,
        {
          id = 24;
          name = "Living Off Experience Hoodie";
          price = 84.99;
          description = "The signature Living Off Experience hoodie features a distressed print of the phrase across the chest, with subtle graphics representing growth and resilience.";
          images = ["living_off_experience_hoodie"];
          tags = ["hoodie", "experience", "growth"];
          collection = ?4;
        },
      ),
      (
        25,
        {
          id = 25;
          name = "LOE Denim";
          price = 119.99;
          description = "Classic denim jacket with Living Off Experience inspired embroidery on the back, featuring symbolic patterns of the journey between light and darkness.";
          images = ["loe_denim"];
          tags = ["jacket", "denim", "experience"];
          collection = ?4;
        },
      ),
      (
        26,
        {
          id = 26;
          name = "Resilience Joggers";
          price = 74.99;
          description = "Comfortable joggers with a resilient motto and symbolic graphics of growth, representing a life of experiences.";
          images = ["resilience_joggers"];
          tags = ["joggers", "resilience", "experience"];
          collection = ?4;
        },
      ),
      (
        27,
        {
          id = 27;
          name = "Journey Tee";
          price = 42.99;
          description = "A t-shirt with a map-like design symbolizing the different paths and experiences in life. Features 'Living Off Experience' subreddit.";
          images = ["journey_tee"];
          tags = ["t-shirt", "journey", "experience"];
          collection = ?4;
        },
      ),
      (
        28,
        {
          id = 28;
          name = "Experience Leggings";
          price = 54.99;
          description = "Stylish leggings that combine comfort with statement graphics representing the twists and turns of life's journey.";
          images = ["experience_leggings"];
          tags = ["leggings", "experience", "good", "evil"];
          collection = ?4;
        },
      ),
      (
        29,
        {
          id = 29;
          name = "Growth Crewneck";
          price = 72.99;
          description = "Crewneck sweater with a subtle graphic symbolizing growth, transformation, and the ongoing journey of life experiences.";
          images = ["growth_crewneck"];
          tags = ["crewneck", "growth", "experience"];
          collection = ?4;
        },
      ),
      (
        30,
        {
          id = 30;
          name = "Trailblazer Denim";
          price = 129.99;
          description = "This unique denim piece features abstract designs representing different paths in life and the 'Living Off Experience' theme.";
          images = ["trailblazer_denim"];
          tags = ["denim", "experience", "journey"];
          collection = ?4;
        },
      ),
      (
        31,
        {
          id = 31;
          name = "Persistence Hoodie";
          price = 89.99;
          description = "A hoodie that encourages perseverance and resilience, featuring motivational graphics and the 'Living Off Experience' slogan.";
          images = ["persistence_hoodie"];
          tags = ["hoodie", "persistence", "experience"];
          collection = ?4;
        },
      ),
      (
        32,
        {
          id = 32;
          name = "LOE Skirt";
          price = 59.99;
          description = "A fashion-forward skirt with bold graphics inspired by the Living Off Experience theme, combining elegance and streetwear vibes.";
          images = ["loe_skirt"];
          tags = ["skirt", "living_off_experience", "good", "evil"];
          collection = ?4;
        },
      ),
      (
        33,
        {
          id = 33;
          name = "Transformation Tee";
          price = 44.99;
          description = "A tee symbolizing the journey of transformation and growth, featuring intricate graphics and inspiring phrases.";
          images = ["transformation_tee"];
          tags = ["t-shirt", "transformation", "experience"];
          collection = ?4;
        },
      ),
    ];

    for ((id, collection) in collectionData.values()) {
      collections.add(id, collection);
    };

    for ((id, product) in productData.values()) {
      products.add(id, product);
    };
  };

  public shared ({ caller }) func init() : async () {
    let isInitialized = collections.size() > 0 and products.size() > 0;
    if (not isInitialized) {
      initializeCatalog();
    };
  };

  public query ({ caller }) func getCollections() : async [Collection] {
    collections.values().toArray();
  };

  public query ({ caller }) func getProducts(collectionId : ?Nat, tag : ?Text) : async [Product] {
    let filteredProducts = products.values().toArray().filter(
      func(p) {
        let collectionMatch = switch (collectionId) {
          case (null) { true };
          case (?id) { p.collection == collectionId };
        };
        let tagMatch = switch (tag) {
          case (null) { true };
          case (?t) { p.tags.values().find(func(existingTag) { existingTag == t }) != null };
        };
        collectionMatch and tagMatch;
      }
    );
    filteredProducts;
  };

  public query ({ caller }) func getProductById(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async Text {
    let newMessage : ContactMessage = {
      name;
      email;
      message;
    };
    contactMessages.add(newMessage);
    "Message received. Thank you!";
  };
};

