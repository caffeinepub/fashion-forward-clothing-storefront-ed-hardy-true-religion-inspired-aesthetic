import Text "mo:core/Text";
import Array "mo:core/Array";
import List "mo:core/List";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";

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
    ];

    let productData : [(Nat, Product)] = [
      (
        1,
        {
          id = 1;
          name = "Angel Wings Hoodie";
          price = 79.99;
          description = "A hoodie featuring embroidered angel wings, symbolizing protection and hope.";
          images = ["angel_wings_hoodie_1", "angel_wings_hoodie_2"];
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
          images = ["demon_slayer_denim_1"];
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
          images = ["balance_tee_1"];
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
          images = ["guardian_angel_jeans_1"];
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
          images = ["temptation_skirt_1"];
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
          images = ["holy_grail_cap_1"];
          tags = ["cap", "purity", "good"];
          collection = ?1;
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
    initializeCatalog();
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
