
<script type="text/template" id="tpl-post-item">
    <h1><%= title.rendered %></h2>
    <%= content.rendered %>
</script>
<script type="text/template" id="tpl-post-list-item">
    <h2><a href="<%= link %>" title="<%= title.rendered %>"><%= title.rendered %></a></h2>
    <%= excerpt.rendered %>
    <a class="button button-main" href="<%= link %>" title="<%= title.rendered %>">View post</a>
    <hr/>
</script>
