/*
 * 🏛️ TDW - ACiencia REST api
 * [UPM] TDW REST api ACiencia
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: miw.etsisi@upm.es
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import org.threeten.bp.LocalDate;

/**
 * Element
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-05-10T19:53:35.841+02:00[Europe/Prague]")
public class Element {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private Long id;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_BIRTH_DATE = "birthDate";
  @SerializedName(SERIALIZED_NAME_BIRTH_DATE)
  private LocalDate birthDate;

  public static final String SERIALIZED_NAME_DEATH_DATE = "deathDate";
  @SerializedName(SERIALIZED_NAME_DEATH_DATE)
  private LocalDate deathDate;

  public static final String SERIALIZED_NAME_IMAGE_URL = "imageUrl";
  @SerializedName(SERIALIZED_NAME_IMAGE_URL)
  private String imageUrl;

  public static final String SERIALIZED_NAME_WIKI_URL = "wikiUrl";
  @SerializedName(SERIALIZED_NAME_WIKI_URL)
  private String wikiUrl;


  public Element id(Long id) {
    
    this.id = id;
    return this;
  }

   /**
   * Element Id
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Element Id")

  public Long getId() {
    return id;
  }


  public void setId(Long id) {
    this.id = id;
  }


  public Element name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(required = true, value = "")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public Element birthDate(LocalDate birthDate) {
    
    this.birthDate = birthDate;
    return this;
  }

   /**
   * Get birthDate
   * @return birthDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public LocalDate getBirthDate() {
    return birthDate;
  }


  public void setBirthDate(LocalDate birthDate) {
    this.birthDate = birthDate;
  }


  public Element deathDate(LocalDate deathDate) {
    
    this.deathDate = deathDate;
    return this;
  }

   /**
   * Get deathDate
   * @return deathDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public LocalDate getDeathDate() {
    return deathDate;
  }


  public void setDeathDate(LocalDate deathDate) {
    this.deathDate = deathDate;
  }


  public Element imageUrl(String imageUrl) {
    
    this.imageUrl = imageUrl;
    return this;
  }

   /**
   * Get imageUrl
   * @return imageUrl
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getImageUrl() {
    return imageUrl;
  }


  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }


  public Element wikiUrl(String wikiUrl) {
    
    this.wikiUrl = wikiUrl;
    return this;
  }

   /**
   * Get wikiUrl
   * @return wikiUrl
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getWikiUrl() {
    return wikiUrl;
  }


  public void setWikiUrl(String wikiUrl) {
    this.wikiUrl = wikiUrl;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Element element = (Element) o;
    return Objects.equals(this.id, element.id) &&
        Objects.equals(this.name, element.name) &&
        Objects.equals(this.birthDate, element.birthDate) &&
        Objects.equals(this.deathDate, element.deathDate) &&
        Objects.equals(this.imageUrl, element.imageUrl) &&
        Objects.equals(this.wikiUrl, element.wikiUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, birthDate, deathDate, imageUrl, wikiUrl);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Element {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    birthDate: ").append(toIndentedString(birthDate)).append("\n");
    sb.append("    deathDate: ").append(toIndentedString(deathDate)).append("\n");
    sb.append("    imageUrl: ").append(toIndentedString(imageUrl)).append("\n");
    sb.append("    wikiUrl: ").append(toIndentedString(wikiUrl)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
