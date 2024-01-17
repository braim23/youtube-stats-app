import React, { Component } from "react";
import Form from "./Form";
import Results from "./Results";
import youtube from "../supports/youtube";
import { extractVideoId } from "./extractVideoId";

class Body extends Component {
  state = {
    tags: [],
    title: '',
    channelTitle: '',
    views: '',
    error: null, // Add an error state to track any errors
  };

  handleSubmit = async (term) => {
    try {
      var meow = extractVideoId(term);

      const response = await youtube.get('/videos', {
        params: {
          id: meow,
        },
      });

      this.setState({
        everything: response.data.items,
        tags: response.data.items[0].snippet.tags,
        title: response.data.items[0].snippet.title,
        channelTitle: response.data.items[0].snippet.channelTitle,
        views: response.data.items[0].statistics.viewCount,
        error: null, // Clear any previous errors
      });
    } catch (error) {
      console.error("Error fetching video data:", error);
      this.setState({
        error: "Broken link, please enter a valid YouTube video link.",
      });
    }
  };

  render() {
    return (
      <div className="w-full container mx-auto my-12">
        <Form handleFormSubmit={this.handleSubmit} />
        {this.state.error ? (
          <div className="text-red-600 text-center mt-7">{this.state.error}</div>
        ) : (
          <Results
            tags={this.state.tags}
            title={this.state.title}
            channelTitle={this.state.channelTitle}
            views={this.state.views}
          />
        )}
      </div>
    );
  }
}

export default Body;
